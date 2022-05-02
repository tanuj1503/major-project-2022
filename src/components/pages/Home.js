import React, { useEffect } from "react";

function Home() {

    useEffect(() => {
        window.location.href = "http://localhost/3000";
      }, []);

    return (
        <>
        </>
    );
};

export default Home;