import "./Loading.css";

const Loading = () => {
   return (
      <div className="loading-container">
         <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </div>
   );
};

export default Loading;
