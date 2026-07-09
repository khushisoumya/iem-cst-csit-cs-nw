// function PageBanner({ title, subtitle, image }) {
//   return (
//     <section className="relative h-[180px] bg-[#081F5C] overflow-hidden">

//       <img
//         src={image}
//         alt=""
//         className="absolute right-0 top-0 h-full w-[38%] object-cover"
//       />

//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(90deg,#081F5C 0%,#081F5C 62%,rgba(8,31,92,.65) 74%,rgba(8,31,92,0) 100%)",
//         }}
//       />

//       <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-8">

//         <div>

//           <p className="uppercase tracking-[4px] text-[11px] text-blue-200 mb-2">
//             {subtitle}
//           </p>

//           <h1 className="text-4xl font-bold text-white">
//             {title}
//           </h1>

//         </div>

//       </div>

//     </section>
//   );
// }

// export default PageBanner;