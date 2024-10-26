import React from "react";

import { useState, useEffect } from "react";
import Spinner from "./Spinner";
import JobListing from "./JobListing";
import ShowAllJobs from "./ShowAllJobs";

function BrowseJobs({isHome = false}) {
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async() => {
    const apiUrl = isHome ? `${import.meta.env.VITE_API_BASE_URL}/jobs?_sort=id&_order=desc&_limit=3` : `${import.meta.env.VITE_API_BASE_URL}/jobs`;
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(loading)
      console.log(data)
      setJobs(data);
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchJobs()
  }, [])

    return (
        <>
          <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
              <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                {isHome ?  'Recent Jobs' : 'Browse Jobs'}
              </h2>
              
                {loading ? (<Spinner loading={loading}/>) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Map eacj jobs fetched to a JobListing component */}
                  {jobs.map( (job, index) => (<JobListing key={index} job={job}/>))}
                </div>)}
                
              </div>
          </section>
          
          {/* && is a short version for 'if true' */}
          {isHome && <ShowAllJobs/>} 
        </>
    );
}

export default BrowseJobs
