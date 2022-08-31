import Head from "next/head";
import Image from "next/image";
import Blogitem from "../components/Blogitem";
import Blogitem2 from "../components/Blogitem2";
import Blogitem3 from "../components/Blogitem3";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Writeapost from "../components/Writeapost";
import { useRecoilState } from "recoil";
import {
  createPoststate,
  delePost1State,
  delePost1ststate,
  deletePostState,
  editedPoststate,
  editPostState,
  loginState,
  postViewState,
  resetPasswordState,
  signupState,
  viewDele1State,
  writePostState,
} from "../atoms/signAtoms";
import Signup from "../components/Signup";
import Resetpassword from "../components/Resetpassword";
import WriteFirstPost from "../components/WriteFirstPost";
import Viewpost from "../components/Viewpost";
import Deletepost from "../components/Deletepost";
import Editpost from "../components/Editpost";
import Viewpostdele from "../components/Viewpostdele";
import Editedpost from "../components/Editedpost";
import Blogitemedit from "../components/Blogitemedit";

export default function Home() {
  const [login, setLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [resetPass, setResetPass] = useRecoilState(resetPasswordState);
  const [post, setPost] = useRecoilState(writePostState);
  const [viewdele1, setView1] = useRecoilState(postViewState);
  const [deletePost, setDeletePost] = useRecoilState(deletePostState);
  const [editPost, setEditPost] = useRecoilState(editPostState);
  const [delePost1, setDelePost1] = useRecoilState(delePost1State);
  const [viewDele1, setViewDele1] = useRecoilState(viewDele1State);
  const [delePost1st, setDelePost1st] = useRecoilState(delePost1ststate);
  const [editedPost, setEditedPost] = useRecoilState(editedPoststate);
  const [view, setView] = useRecoilState(postViewState);
  const [createPost, setCreatePost] = useRecoilState(createPoststate);

  return (
    <div className="">
      <Head>
        <title>ATG-Project</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div
        onClick={() => {
          setPost(true);
        }}
        className="text-right m-5 mr-14"
      >
        <Writeapost />
      </div>
      <div className="grid grid-cols-4 justify-items-center mt-8 gap-y-8">
        {/* {newpost ? <Blogitem /> : null} */}
        {/* <Blogitem /> */}
        {editedPost ? (
          <Editedpost />
        ) : (
          <div
            onClick={() => {
              setView(true);
            }}
          >
            <Blogitemedit />
          </div>
        )}{" "}
        <Blogitem2 />
        <Blogitem3 />
        {createPost ? (
          <div>
            {delePost1st ? (
              <div className="hidden"></div>
            ) : (
              <div
                onClick={() => {
                  setViewDele1(true);
                }}
              >
                <Blogitem />
              </div>
            )}
            {viewDele1 ? <Viewpostdele /> : null}
          </div>
        ) : null}
      </div>
      {login ? <Login /> : null}
      {signup ? <Signup /> : null}
      {resetPass ? <Resetpassword /> : null}
      {post ? <WriteFirstPost /> : null}
      {editPost ? <Editpost /> : null}
      {view ? <Viewpost /> : null}
    </div>
  );
}
