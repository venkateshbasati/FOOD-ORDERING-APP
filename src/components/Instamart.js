import { useState } from "react";

const Section = ({ title, description,visible, setVisible}) => {
//   const [visible, setVisible] = useState(false);
// const[iscollapsible,setIsCollapsible]=useState(false)

  return (
    <>
      <div className="border border-cyan-950 bg-slate-200 m-2 p-2 rounded-md ">
        <div className=" flex justify-between ">
          <h3 className="text-lg font-semibold m-1 ">{title}</h3>

          { visible   ? (
            <i
              onClick={() => {
                // setIsCollapsible(false);
                setVisible()}}
              className="fa fa-chevron-up font-bold text-xl m-1"
              aria-hidden="true"
            ></i>
          ) : (
            <i
            onClick={() => {
                // setIsCollapsible(true);
                setVisible()}}
              className=" fa fa-chevron-down  text-xl font-bold m-1"
              aria-hidden="true"
            ></i>
          )}
        </div>
        {visible && <p>{description}</p>}
      </div>
    </>
  );
};

const Instamart = () => {
    const [visibleSection, setVisibleSection]=useState("")
        
   
   
  return (
    <>
      <h2 className="text-xl font-bold text-center border border-orange-400 m-2 p-2 bg-orange-200 ">
        Instamart
      </h2>
      <Section
        title={"About"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
        }
        visible={visibleSection==="About"}
        setVisible={()=>setVisibleSection("About")}
        // iscollapsible={false}
       
      />
      {
        // the description is dummy text taken from lorem lipsum website
      }
      <Section
        title={"Careers"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
        }
        visible={visibleSection==="Careers"}
        setVisible={()=>setVisibleSection("Careers")}
        //  iscollapsible={false}

      />
      <Section
        title={"Team Instamart"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
        }
        visible={visibleSection==="Team Instamart"}
        setVisible={()=>setVisibleSection("Team Instamart")}
        //  iscollapsible={false}
      />

    <Section
        title={"Products"}
        description={
          "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish."
        }
        visible={visibleSection==="Products"}
        setVisible={()=>setVisibleSection("Products")}
        //  iscollapsible={false}
      />  
    </>
  );
};

export default Instamart;
