import React, { useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import { fetchJobs } from '../redux/jobActions';
import JobCard from '../components/JobCard';
import axios from 'axios';
import './Card.css'
import Filters from './Filters';

function JobList({companyName}) {
//   useEffect(() => {
//     fetchJobs();
//   }, [fetchJobs]);
const [jobs, setJobs] = useState([]);
const [loading, setLoading] = useState(false);
const [limit, setLimit] = useState(4);
const [offsset, setOffsset] = useState(0);
const scrollRef = useRef(null);

const [filteredJobs, setFilteredJobs] = useState([]);

useEffect(()=>{
    console.log("1st useEff")
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON",{limit:1000})
      .then(async response => {
        const data = await response.data.jdList;
        setJobs(data);
        console.log('data = ', data.length)
        setLoading(false);
      });
    if(companyName){
        console.log('if')
        const filtered = jobs.filter(job => job.companyName.toLowerCase().includes(companyName.toLowerCase()));
      setFilteredJobs(filtered);
    } else {
        console.log('else');
    //   setFilteredJobs(jobs);
    }
},[companyName])

  useEffect(()=>{
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
    const body = JSON.stringify({
        "limit": 0,
        "offset": 0
       });
       
       const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body
       };
       console.log('limit = ', limit);
       const fetchData = async () => {
        setLoading(true);
        try{
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON", {limit, offsset})
      .then(async response => {
        console.log('jdl = ',response.data);
        const data = await response.data.jdList;
        setJobs(data);
        setLoading(false);
        // console.log('vetry = ',response?.data.jdList[0]);

        // Handle response
      })
    } catch (error){
        setLoading(false);
    }
    };
    fetchData();

    const handleScroll = () => {
        if (
          scrollRef.current &&
          window.innerHeight + window.scrollY >= document.body.offsetHeight -150
        ) {
          setLimit(prevPage => prevPage + 4); // Increment page number
          setOffsset(prevOffsset => prevOffsset + 5);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  },[limit, !companyName])

  return (
    <div className="cards-container">
        {console.log('jobs = ', jobs)}
        {companyName && filteredJobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      {!companyName && jobs?.map(job => (
        <>
        <JobCard key={job?.jdUid} job={job} />
        {loading && <div>loading...</div>}
        </>
      ))}
      <div ref={scrollRef}></div>
    </div>
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs // Assuming you have a 'jobs' slice in your Redux store
});

export default JobList;
