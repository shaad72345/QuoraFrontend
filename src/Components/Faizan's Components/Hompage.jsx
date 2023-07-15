import React from "react";
import Sidebar from "./Sidebar";
import { Spacer } from "@chakra-ui/react";
import Advertisment from "./Advertisment";
import "../Faizan's Components/homapage.css";
import AddPost from "./AddPost";
import PostContainer from "./PostContainer";
import { useContext, useState, useEffect } from "react";
import { myContext } from "../../CustomProviderComp";
import { Button, Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";

function Hompage(props) {
  let { isLogin, allpost, setAllpost, pageNo, setPageNo } =
    useContext(myContext);

  const getposts = () => {
    fetch(`https://quoraclonebackend.onrender.com/posts?limit=${pageNo}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${isLogin}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setAllpost(res);
      })
      .catch((err) => {
        toast(err.message);
      });
  };
  function handlepage() {
    setPageNo(pageNo + 5);
  }
  useEffect(() => {
    getposts();
  }, [pageNo]);

  return (
    <div                             //marginLeft: "2%" 
      id="mainContainer"
      style={{ display: "flex", justifyContent: "center" ,width:"100%" }}
    >
      <div
        className="homepage-container"
        style={{
          marginTop: "60px",
          position: "absolute",
          zIndex: "-1",
          display: "flex",
         
        }}
      >
        <div style={{ width: "80%", position: "fixed" }}>
          <Box
            display={{
              base: "none",
              md: "none",
              lg: "inline-flex",
            }}
          >
            <Sidebar />
          </Box>
        </div>
          <Box className="homepage"  width={{
              base: "300%",
              md: "200%",
              lg: "55%",
            }} marginLeft={{ base: "0px",
            md: "0px",
          lg:"9rem"
            }} >
        {/* <div > */}
          <AddPost />
          <Spacer />
          {allpost.map(function (elem) {
            return <PostContainer props={elem} />;
          })}
          <Center>
            <Button
              onClick={handlepage}
              style={{
                width: "100%",
                borderRadius: "30px",
                backgroundColor: "lightteal",
              }}
            >
              more posts...
            </Button>{" "}
          </Center>
        {/* </div> */}
        </Box>
        <div style={{ width: "75%", position: "fixed", left: "69%" }}>
          <Box
            display={{
              base: "none",
              md: "none",
              lg: "inline-flex",
            }}
          >
            <Advertisment />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Hompage;
