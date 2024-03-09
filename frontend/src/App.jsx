import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import { useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy, useEffect } from "react";
import Loader from "./components/common/Loader/Loader";
import AdminGetUsers from "./components/core/Dashboard/Admin/AdminGetUsers";
import StudentCoursePage from "./components/core/Dashboard/Student/StudentCoursePage";

const AdminSideBar = lazy(() =>
  import("./components/core/Dashboard/Admin/AdminSideBar/SideBar")
);
const Homepage = lazy(() => import("./components/pages/Homepage"));
const Login = lazy(() => import("./components/common/forms/Login"));
const Signup = lazy(() => import("./components/common/forms/Signup"));
const VerifyEmail = lazy(() => import("./components/pages/VerifyEmail"));
const About = lazy(() => import("./components/pages/About"));
const Course = lazy(() => import("./components/pages/Course"));
const CourseDetails = lazy(() => import("./components/pages/CourseDetails"));
const SideBar = lazy(() => import("./components/core/DashboardNavbar/SideBar"));
const StudentCourses = lazy(() =>
  import("./components/core/Dashboard/Student/StudentCourses")
);
const CreateCourse = lazy(() =>
  import("./components/core/Dashboard/Instructor/CourseBuilder/CreateCourse")
);
const InstructorDashBoard = lazy(() =>
  import("./components/core/Dashboard/Instructor/Instructor")
);
const SeeAllCourses = lazy(() =>
  import("./components/core/Dashboard/Instructor/SeeAllCourses")
);
const Income = lazy(() =>
  import("./components/core/Dashboard/Instructor/Income")
);
const StudentDashBoard = lazy(() =>
  import("./components/core/Dashboard/Student/Student")
);
const AdminDashBoard = lazy(() =>
  import("./components/core/Dashboard/Admin/Admin")
);
function App() {
  const { token, signUpData } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/admin/users"
          element={
            user && user.accountType === "Admin" ? (
              <AdminSideBar>
                <AdminGetUsers />
              </AdminSideBar>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route element={<ProtectedRoute token={token} />}>
          <Route
            path="/see-all-courses"
            element={
              user && user.accountType === "Instructor" ? (
                <SideBar children={<SeeAllCourses />} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/incomes"
            element={
              user && user.accountType === "Instructor" ? (
                <SideBar children={<Income />} />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            path="/instructor/create-course"
            element={
              user && user.accountType === "Instructor" ? (
                <CreateCourse />
              ) : (
                <Navigate to={"/login"} />
              )
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              user ? (
                user.accountType === "Instructor" ? (
                  <InstructorDashBoard />
                ) : user.accountType === "Student" ? (
                  <StudentDashBoard />
                ) : (
                  <AdminSideBar children={<AdminDashBoard />} />
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path={user && `/${user._id}/course`}
            element={<StudentCoursePage />}
          />
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/verify-email"
          element={signUpData ? <VerifyEmail /> : <Navigate to={"/signup"} />}
        />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Suspense>
  );
}

export default App;
