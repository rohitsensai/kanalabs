
import Leftnavbar from "@/components/leftnavbar";
import Header from "@/components/header";
import Main from "@/components/main";
export default function Home() {
  return (
    <>
     <div className="d-sm-flex min-vh-100  w-100" style={{backgroundColor:"#0C0C0D"}}>
      <Leftnavbar/>
      <div className="w-100 ">
       
      <Header/>
      <Main/>
     
      </div> 
  
     </div>
     <div className='d-flex d-sm-none w-100   text-white justify-content-around py-4' style={{position:"sticky",bottom:"0px",backgroundColor:"#0C0C0D",marginTop:"10px"}}>
                            <div>Home</div>
                            <div>Balance</div>
                            <div>Profile</div>
                        </div>
         
     

    </>
  );
}
