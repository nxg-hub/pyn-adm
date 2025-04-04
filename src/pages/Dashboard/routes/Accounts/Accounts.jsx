import React from "react";
import Button from "../../../../Buttons/Button"
// import Breadcrumbs from "../../../../Butt/Breadcrumbs";
// import About from "../../../../Butt/About";

const Accounts = () => {
  const handleSubmit = () => {
    alert("Button clicked!");
  };

  return (

    <div className="ml-[312px]">
      <h1 className="text-2xl font-bold mb-4">Accounts</h1>
      <div className="flex flex-wrap gap-4">
        {/* Small Button */}
        <Button
          text="Small Button"
          onClick={handleSubmit}
          size="small"
        />

        {/* Medium Button */}
        <Button
          text="Medium Button"
          onClick={handleSubmit}
          size="medium"
        />

        {/* Large Button */}
        <Button
          text="Large Button"
          onClick={handleSubmit}
          size="large"
        />

        {/* Registration Button */}
        <Button
          text="Register"
          onClick={handleSubmit}
          isLoading={false}
          isRegistration={true}
        />

        {/* Success Button */}
        <Button
          text="Success"
          onClick={handleSubmit}
          isLoading={false}
          isSuccess={true}
          size="small" // You can adjust size if needed
        />
        {/* Success Button */}
        <Button
          text="Success"
          onClick={handleSubmit}
          isLoading={false}
          isSuccess={true}
          size="medium" // You can adjust size if needed
        />
        {/* Success Button */}
        <Button
          text="Success"
          onClick={handleSubmit}
          isLoading={false}
          isSuccess={true}
          size="large" // You can adjust size if needed
        />
       {/* Failed Button */}
       <Button 
          text="Failed Button" 
          onClick={handleSubmit} 
          isFailed={true} 
          size="small" // Optional size
        />

         {/* Failed Button */}
         <Button 
          text="Failed Button" 
          onClick={handleSubmit} 
          isFailed={true} 
          size="medium" // Optional size
        />

         {/* Failed Button */}
         <Button 
          text="Failed Button" 
          onClick={handleSubmit} 
          isFailed={true} 
          size="large" // Optional size
        />

      </div>
    </div>
  );
};

export default Accounts;
