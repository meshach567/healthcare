"use client";
import Navbar from "../components/header/navbar";
import React from "react";
import ProfileName from "../components/profileName/Patient";
import ProfileCard from "../components/profilecard/ProfileCard";
import Lab from "../components/profileLab/lab";
import List from "../components/profileList/list";
import History from "../components/profileHistory/history";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const { loading, error } = useFetch('https://fedskillstest.coalitiontechnologies.workers.dev/');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <main >
      <Navbar />
      <div className="testimonial-grid">
        <ProfileName />
        <ProfileCard />
        <List />
        <History />
        <Lab />
      </div>
    </main>
  );
}
