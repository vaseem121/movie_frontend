import React, { useEffect, useState } from "react";
import { get_movie_api, IMG_URL } from "../Apis/apis";
import { useNavigate } from "react-router-dom";
import edit_icon from "../assets/edit_icon.png";
import my_movies from "../assets/my_movies.png";
import logout_icon from "../assets/logout.png";

const Movie_Table = () => {
  const [pageIndex, setpageIndex] = useState(0);
  const [movie_arr, setmovie_arr] = useState([]);
  const navigate = useNavigate();
  const get_movies = () => {
    get_movie_api({
      pageIndex,
    })
      .then((res) => {
        // console.warn(res);
        setmovie_arr(res.data?.m_res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(get_movies, []);

  return (
    <>
      {movie_arr?.length > 0 && (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "86%",
                padding: "20px",
                color: "#fff",
              }}
            >
              <img
                src={my_movies}
                style={{
                  height: "30px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate("/add-movies");
                }}
              />
              <img
                src={logout_icon}
                style={{
                  height: "30px",
                  cursor:"pointer"
                }}
                onClick={()=>{
                  navigate("/")
                }}
              />
            </div>
          </div>
          <div
            style={{
              overflowY: "auto",
              maxHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 15,
              flexWrap: "wrap",
              width: "100vw",
            }}
          >
            {movie_arr?.map((el, index) => {
              return (
                <div
                  style={{
                    backgroundColor: "#092C39",
                    padding: "5px",
                    color: "#fff",
                    width: "20%",
                    minWidth: "200px",
                  }}
                >
                  <img
                    src={IMG_URL + el?.poster+"?timestamp"+new Date()}
                    style={{
                      width: "100%",
                      minWidth: "200px",
                      height: "350px",
                      borderRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      textAlign: "start",
                      padding: "5px 10px",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                    >
                      {el?.name}
                    </span>
                    &nbsp;&nbsp;
                    <img
                      src={edit_icon}
                      style={{
                        height: "12px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigate("/upd-movies", {
                          state: el,
                        });
                      }}
                    />
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {el?.year}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
      {movie_arr?.length == 0 && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <b
            style={{
              fontSize: "24px",
              color: "#fff",
            }}
          >
            Your movie list is empty
          </b>
          <button
            style={{
              height: "35px",
              width: "140px",
              border: "1px solid #2BD17E",
              color: "#fff",
              borderRadius: "10px",
              cursor: "pointer",
              background: "#2BD17E",
              fontWeight: "700",
              marginTop: "15px",
            }}
            onClick={() => {
              navigate("/add-movies");
            }}
          >
            Add a new movie
          </button>
        </div>
      )}
    </>
  );
};

export default Movie_Table;
