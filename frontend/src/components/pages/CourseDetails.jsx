import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiConnector } from "../../apis/apicConnector";
import Navbar from "../common/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../slices/authSlice";
import Loader from "../common/Loader/Loader";
import Footer from "../common/Footer/Footer";
const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [activeButton, setActiveButton] = useState(0);
  const { id } = useParams();
  const { loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(setLoading(true));
        const response = await apiConnector(
          "GET",
          `https://dummyjson.com/products/${id}`
        );
        setCourseData(response.data);
        dispatch(setLoading(false));
      } catch (error) {
        console.log("Error Retrieving Api data:", error);
        dispatch(setLoading(false));
      }
    };

    fetchData();
  }, [id, dispatch]);
  useEffect(() => {
    console.log("CourseData: ", courseData);
  }, [courseData]);

  const buttonData = [
    {
      id: 1,
      text: "Description",
    },
    {
      id: 2,
      text: "Instructor",
    },
    {
      id: 3,
      text: "Syllabus",
    },
    {
      id: 4,
      text: "Price",
    },
    {
      id: 5,
      text: "Reviews",
    },
    {
      id: 6,
      text: "FAQ",
    },
  ];

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        courseData && (
          <>
            <div className="py-20 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <h2 className="px-10 text-center md:text-start lg:text-start md:px-30 lg:px-40 text-3xl font">
                  {courseData.brand}
                </h2>
                <h1 className="px-10 text-center md:text-start lg:text-start md:px-30 lg:px-40 text-3xl font-bold">
                  {courseData.title}
                </h1>
                <h2 className="px-10 text-center md:text-start lg:text-start md:px-30 lg:px-40 text-3xl font">
                  {courseData.category}
                </h2>
              </div>
              <div className="px-10 md:px30 lg:px-40">
                <img
                  src={courseData.thumbnail}
                  alt={courseData.title}
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
            <div className="pb-16 flex gap-5 flex-col md:flex-row lg:flex-row md:gap-16 lg:gap-16 justify-center px:auto md:px-30 lg:px-40">
              {buttonData.map((item, idx) => (
                <button
                  className={
                    activeButton === idx
                      ? "text-[blue] border-t-2 border-b-2 md:border-b-0 md:border-t-2 md:border-r-2 text-xl lg:border-b-0 lg:border-t-2 lg:border-r-2 py-3 px-5 transition-all duration-300 font-bold"
                      : ""
                  }
                  key={idx}
                  onClick={() => setActiveButton(idx)}
                >
                  {item.text}
                </button>
              ))}
            </div>
            {activeButton === 0 && (
              <div className="flex flex-col px-10 md:px-30 lg:px-40 mx-auto text-center">
                <div className="flex flex-col gap-8 px-32">
                  <h1 className="text-center md:text-start lg:text-start text-3xl font-bold">
                    {courseData.title}
                  </h1>
                  <h2 className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sint eos modi molestias harum delectus aliquam, incidunt
                    quidem quasi quam quo et dicta, optio tenetur qui esse
                    tempore dignissimos, suscipit enim!Lorem Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Asperiores, minus non
                    soluta assumenda animi aliquam nihil dolore possimus
                    doloremque, optio obcaecati nisi quo eum ipsa distinctio
                    ducimus dolorum, pariatur dolor. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veniam nostrum quaerat
                    excepturi nesciunt saepe alias at, libero aspernatur nulla
                    nam adipisci! Sapiente quae praesentium eos fuga enim quos,
                    nesciunt magnam. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Necessitatibus eius ipsam blanditiis earum
                    pariatur incidunt adipisci, aliquid veritatis iusto libero
                    consequatur temporibus tenetur a aut ad asperiores dolores
                    dolore vero. Lorem ipsum dolor sit, amet consectetur
                    adipisicing elit. Quia corporis nobis laudantium nesciunt,
                    cum voluptas esse quaerat ut totam, odio aut. Voluptas odit
                    delectus alias itaque dolorum fuga est pariatur?
                  </h2>
                  <img
                    src={courseData.thumbnail}
                    alt={courseData.title}
                    width={"100%"}
                    height={"100%"}
                  />
                  <h2 className="py-8 pb-32">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, rem cum. Omnis expedita enim officiis vitae,
                    cum et reprehenderit harum possimus laboriosam! Non modi,
                    voluptates expedita nisi qui aut porro. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Eius inventore
                    mollitia asperiores perspiciatis cupiditate dignissimos
                    quos, voluptatem tempora fugiat alias facilis iusto?
                    Deserunt quis repudiandae distinctio tempore eum velit amet!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Exercitationem autem, repellat itaque nemo sit ullam,
                    cupiditate architecto ex placeat ipsa dolor quaerat nulla.
                    Quo explicabo suscipit numquam sit quos tempora. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Qui quos vitae
                    expedita veniam vero assumenda, repellendus illum quam ad
                    neque inventore. Voluptatum labore laboriosam delectus
                    consectetur? Saepe adipisci hic corporis! Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Laudantium odio
                    officia adipisci dolorem totam accusantium corporis voluptas
                    minima distinctio tempore maiores non possimus a error
                    numquam recusandae, aperiam laboriosam praesentium?Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Eligendi
                    ducimus labore aliquam doloremque dignissimos corrupti ex,
                    voluptatum impedit nobis eos neque odit laborum porro beatae
                    magnam nostrum cupiditate reprehenderit tempore?
                  </h2>
                </div>
              </div>
            )}
          </>
        )
      )}
      <Footer />
    </>
  );
};

export default CourseDetails;
