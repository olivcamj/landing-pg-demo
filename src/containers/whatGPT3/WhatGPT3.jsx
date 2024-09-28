import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text='GPT-3 (Generative Pre-trained Transformer 3) is an advanced language model developed by OpenAI. It is based on the Transformer architecture, which allows it to generate human-like text based on input prompts. GPT-3 has 175 billion parameters, making it one of the largest and most powerful models when it was released in 2020.'  />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possiblities are beyond your imagination</h1>
        <p className="gpt3__whatgpt3-heading_subtext">Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Powers chatbots to engage in natural conversations, handling customer support, FAQs, and personalized assistance." />
        <Feature title="Knowledgebase" text="Enhances knowledgebases by generating summaries, answering complex questions, and providing accurate insights." />
        <Feature  title="Education" text="Aids education by offering tutoring, generating content, answering questions, and personalizing learning experiences." />
    </div>
  </div>
);
}

export default WhatGPT3;
