'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from './Chatbot.module.css';

interface Message {
  text: string;
  type: 'user' | 'bot';
  isHTML?: boolean;
}

const KNOWLEDGE = [
  {
    keys: ['services'],
    answer: `AWATAR9 provides AI automation services including:
<br><br>
• AI Agents for business automation<br>
• Recruitment automation systems<br>
• Lead generation automation<br>
• CRM automation workflows<br>
• Research AI assistants<br>
• Customer support AI bots`,
  },
  {
    keys: ['ai agents', 'ai bots'],
    answer: `AI Agents are intelligent systems that can perform tasks automatically.
<br><br>
They can:<br>
• analyze information<br>
• connect to APIs<br>
• automate workflows<br>
• make decisions<br><br>
Businesses use AI agents to reduce manual work and increase productivity.`,
  },
  {
    keys: ['automation'],
    answer: `AI automation helps businesses:<br><br>
• reduce repetitive manual work<br>
• increase productivity<br>
• improve operational efficiency<br>
• scale operations faster<br>
• reduce human errors`,
  },
  {
    keys: ['industries'],
    answer: `AWATAR9 works with industries such as:<br><br>
• Staffing & recruitment companies<br>
• CRO and pharmaceutical organizations<br>
• Marketing agencies<br>
• Technology startups<br>
• Data-driven businesses`,
  },
  {
    keys: ['contact', 'reach', 'talk'],
    answer: 'CONTACT',
  },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      welcome();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const welcome = () => {
    addBotHTML(`
      👋 <b>Welcome to AWATAR9</b><br><br>
      I'm your AI assistant. I can help explain our AI automation solutions.<br><br>
      Try asking:<br>
      • services<br>
      • ai agents<br>
      • automation<br>
      • industries<br>
      • contact
    `);
  };

  const addBotHTML = (html: string) => {
    setMessages((prev) => [...prev, { text: html, type: 'bot', isHTML: true }]);
  };

  const addMessage = (text: string, type: 'user' | 'bot') => {
    setMessages((prev) => [...prev, { text, type }]);
  };

  const handleSendMessage = () => {
    const text = inputValue.trim();
    if (!text) return;

    addMessage(text, 'user');
    setInputValue('');

    const lower = text.toLowerCase();
    let found = false;

    for (const item of KNOWLEDGE) {
      for (const key of item.keys) {
        if (lower.includes(key)) {
          if (item.answer === 'CONTACT') {
            showContact();
          } else {
            addBotHTML(item.answer);
          }
          found = true;
          break;
        }
      }
      if (found) break;
    }

    if (!found) {
      addMessage(
        'I can help explain AWATAR9 services, AI agents, automation solutions, industries, or how to contact us.',
        'bot'
      );
    }
  };

  const showContact = () => {
    addBotHTML(`
      <b>📩 Contact AWATAR9</b><br><br>
      To discuss your AI automation needs, click the button below:
      <br><br>
      <a href="/#contact" class="${styles.ctaButton}">
        Let's Build Your AI
      </a>
    `);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      <button
        id="chatBtn"
        className={styles.chatBtn}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Close Chat' : 'Chat with AWATAR9'}
      </button>

      {isOpen && (
        <div id="chatbox" className={styles.chatbox}>
          <div className={styles.header}>AWATAR9 AI Assistant</div>

          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.type === 'user' ? styles.user : styles.bot
                }`}
                {...(msg.isHTML ? { dangerouslySetInnerHTML: { __html: msg.text } } : { children: msg.text })}
              />
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className={styles.inputArea}>
            <input
              className={styles.input}
              placeholder="Ask about AWATAR9..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className={styles.send} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
