// import React from 'react'

const About = () => {
  return (
    <div className="md:flex md:flex-row md:space-x-10 pt-10 space-y-6 md:space-y-0 h-screen">
      <div className="md:flex md:flex-1 md:flex-col md:items-start ">
        <h1 className="text-6xl font-bold text-[#008080]">About</h1>
        <img
          src="https://www.dl.dropboxusercontent.com/scl/fi/5azfmy4pju7l6rm7hku5w/WordCue.png?rlkey=zljak0srtde1sm7zihxa6m2wf&dl=0"
          className="md:opacity-65 hidden md:block"
        />
      </div>
      <div className="md:flex-1">
        <p className="text-justify">
          The 'Word Cue' system is an innovative Word Sense Disambiguation (WSD)
          platform designed to enhance natural language understanding by
          accurately interpreting the meaning of words in context. WSD tasks
          involve determining the correct meaning of a word when it has multiple
          meanings, a challenge crucial for various applications like machine
          translation, information retrieval, and text-to-speech conversion.
          'Word Cue' excels in this area by leveraging advanced algorithms and
          contextual analysis, ensuring that each word is understood in its
          correct sense based on surrounding text. This leads to more precise
          and natural-sounding translations, efficient information extraction,
          and improved user interactions in AI-powered applications. The system
          is user-friendly and integrates seamlessly into various linguistic
          processing pipelines, making it an invaluable tool for developers,
          linguists, and businesses aiming to bridge the gap between human
          language and machine interpretation.
        </p>
      </div>
    </div>
  );
};

export default About;
