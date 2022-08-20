import Head from "next/head";
import Image from "next/image";
import Blogitem from "../components/Blogitem";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Writeapost from "../components/Writeapost";
import { useRecoilState } from "recoil";
import {
  deletePostState,
  loginState,
  postViewState,
  resetPasswordState,
  signupState,
  writePostState,
} from "../atoms/signAtoms";
import Signup from "../components/Signup";
import Resetpassword from "../components/Resetpassword";
import WriteFirstPost from "../components/WriteFirstPost";
import Viewpost from "../components/Viewpost";
import Deletepost from "../components/Deletepost";

export default function Home() {
  const [login, setLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  const [resetPass, setResetPass] = useRecoilState(resetPasswordState);
  const [post, setPost] = useRecoilState(writePostState);
  const [view, setView] = useRecoilState(postViewState);
  const [deletePost, setDeletePost] = useRecoilState(deletePostState);

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
      <div className="grid grid-cols-4 justify-items-center mt-8">
        <div
          onClick={() => {
            setView(true);
          }}
        >
          <Blogitem />
        </div>

        <Blogitem />
        <Blogitem />
        <Blogitem />
      </div>
      {login ? <Login /> : null}
      {view ? <Viewpost /> : null}
      {signup ? <Signup /> : null}
      {resetPass ? <Resetpassword /> : null}
      {post ? <WriteFirstPost /> : null}
      {deletePost ? <Deletepost /> : null}
      <div className="text-xl">Hello world</div>
    </div>
  );
}
