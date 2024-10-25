import React, { useEffect, useRef, useState } from "react";
import { convert_into_base64 } from "../Utilities/Img_conv";
import { IMG_URL, upd_movie_api } from "../Apis/apis";
import { useLocation, useNavigate } from "react-router-dom";

const Upd_Movies = () => {
  const navigate = useNavigate();
  const r_state = useLocation();

  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handleFileChange = (e) => {
    convert_into_base64(e.target.files[0], (base64) => {
      setimage_file(base64);
    });
  };

  const [movie_data, setmovie_data] = useState({
    name: "",
    year: "",
    poster:
      Date.now() + "-" + Math.random().toString(36).substring(2, 8) + ".png",
  });

  const [image_file, setimage_file] = useState("");

  const { name, year, poster } = movie_data;

  const upd_movie_data = (val) => {
    setmovie_data({
      ...movie_data,
      ...val,
    });
  };

  const upd_movie = () => {
    if(name && year){
    upd_movie_api({
      movie_data: {
        ...movie_data,
        poster: r_state?.state?.poster,
      },
      image: image_file,
      _id:r_state?.state?._id
    })
      .then((res) => {
        navigate("/movie-list");
      })
      .catch((err) => {
        console.error(err);
      });
    }
    else{
      alert("Please enter all fields!");
    }
  };

  useEffect(() => {
    if (r_state?.state?.name) {
      setimage_file("");
      setmovie_data({
        name: r_state?.state?.name,
        poster: IMG_URL + r_state?.state?.poster+"?timestamp"+new Date(),
        year: r_state?.state?.year
      });
    }
  }, [r_state]);

  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          padding: "40px",
          color: "#fff",
          textAlign: "start",
        }}
      >
        <span>Edit</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          padding: "40px",
          width: "100%",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        {!(image_file || poster?.includes(IMG_URL)) && (
          <div
            style={{
              borderRadius: "5px",
              height: "300px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#224957",
              border: "1px dashed #fff",
              cursor: "pointer",
            }}
            onClick={handleButtonClick}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#fff",
              }}
            >
              Drop an image here
            </span>
          </div>
        )}
        {(image_file || poster?.includes(IMG_URL)) && (
          <img
            src={image_file || poster}
            style={{
              borderRadius: "5px",
              height: "300px",
              width: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              backgroundColor: "#224957",
              border: "1px dashed #fff",
              cursor: "pointer",
              objectFit: "cover",
            }}
            onClick={handleButtonClick}
          />
        )}
        <input
          type="file"
          ref={fileInputRef}
          style={{
            display: "none",
          }}
          onChange={handleFileChange}
        />
        <div
          style={{
            textAlign: "start",
          }}
        >
          <input
            style={{
              height: "30px",
              width: "250px",
              backgroundColor: "#224957",
              borderRadius: "5px",
              color: "#fff",
              border: "none",
              padding: "5px 10px",
            }}
            value={name}
            onChange={(e) => {
              upd_movie_data({
                name: e.target.value,
              });
            }}
            placeholder="Title"
          />
          <br />
          <input
            style={{
              height: "30px",
              width: "150px",
              backgroundColor: "#224957",
              borderRadius: "5px",
              color: "#fff",
              border: "none",
              marginTop: "10px",
              padding: "5px 10px",
            }}
            value={year}
            onChange={(e) => {
              upd_movie_data({
                year: e.target.value,
              });
            }}
            placeholder="Publishing Year"
          />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: 20,
              marginTop: "30px",
            }}
          >
            <button
              style={{
                height: "40px",
                width: "100px",
                border: "1px solid #fff",
                color: "#fff",
                borderRadius: "5px",
                background: "transparent",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/movie-list");
              }}
            >
              Cancel
            </button>
            <button
              style={{
                height: "40px",
                width: "100px",
                border: "1px solid #2BD17E",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                background: "#2BD17E",
              }}
              onClick={upd_movie}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upd_Movies;
