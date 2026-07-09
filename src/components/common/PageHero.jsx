import buildingImg from "../../assets/images/building2.png";



// import { ArrowRight } from "lucide-react";
// import buildingImg from "../../assets/images/building2.png";

// function PageHero({
//   eyebrow = "Department of",
//   title,
//   description,
//   buttonText,
//   showButton = false,
// }) {
//   return (
//     <section className="relative h-[430px] overflow-hidden bg-[#081F5C]">

//       {/* Background */}
//       <img
//         src={buildingImg}
//         alt="Department Building"
//         className="absolute inset-0 w-full h-full object-cover object-center"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-[#081F5C]/45"></div>

//       {/* Left Gradient */}
//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg,#081F5C 0%,#081F5C 24%,rgba(8,31,92,.88) 40%,rgba(8,31,92,.60) 58%,rgba(8,31,92,.25) 76%,transparent 100%)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">

//         {/* <div className="max-w-[470px]">

//           <p className="uppercase tracking-[6px] text-xs text-blue-200 mb-5">
//             {eyebrow}
//           </p>

//           <h1 className="text-white text-[52px] font-bold leading-[1.08]">
//             {title}
//           </h1>

//           {description && (
//             <p className="mt-6 text-gray-200 leading-8">
//               {description}
//             </p>
//           )}

//           {showButton && (
//             <button className="mt-8 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
//               {buttonText}
//               <ArrowRight size={18} />
//             </button>
//           )} */}

//           <div className="w-full max-w-[560px]">

//   <p className="uppercase tracking-[5px] text-[11px] text-blue-200 mb-4">
//     {eyebrow}
//   </p>

//   <h1
//     className="
//       text-white
//       font-extrabold
//       leading-[1.05]
//       text-[42px]
//       lg:text-[48px]
//       xl:text-[52px]
//       max-w-[560px]
//       break-words
//     "
//   >
//     {title}
//   </h1>

//   {description && (
//     <p className="mt-5 max-w-[470px] text-[17px] leading-7 text-gray-200">
//       {description}
//     </p>
//   )}

//         </div>

//       </div>

//     </section>
//   );
// }

// export default PageHero;





// function PageHero({
//   eyebrow,
//   title,
//   description,
//   image,
//   titleClassName = "",
// }) {

function PageHero({
  eyebrow = "Department of",
  title,
  description,
  image = buildingImg,
  titleClassName = "",
}){
  return (
    <section className="relative h-[430px] overflow-hidden bg-[#081F5C]">

      {/* Background Image */}
      <img
        src={image}
        alt={typeof title === "string" ? title : "Hero"}
        className="absolute inset-0 w-full h-full object-cover object-right"
      />

      {/* Blue Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#081F5C 0%,#081F5C 34%,rgba(8,31,92,.86) 46%,rgba(8,31,92,.56) 60%,rgba(8,31,92,.22) 74%,transparent 88%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-16">

          <p className="uppercase tracking-[6px] text-[11px] text-blue-200 mb-5">
            {eyebrow}
          </p>

          <h1
            className={`
              font-extrabold
              text-white
              leading-[1.08]
              tracking-[-0.02em]
              max-w-[680px]
              break-words
              ${titleClassName || "text-[50px]"}
            `}
          >
            {title}
          </h1>

          {description && (
            <p className="mt-5 max-w-[520px] text-[17px] leading-7 text-gray-200">
              {description}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}

export default PageHero;