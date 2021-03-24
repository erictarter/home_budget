import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isMarried, setIsMarried] = useState(false);
  const [name, setName] = useState('');
  const [income, setIncome] = useState(0);
  const [secondPerson, setSecondPerson] = useState(false);
  const [secondName, setSecondName] = useState('');
  const [secondIncome, setSecondIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [creditScore, setCreditScore] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [intro, setIntro] = useState(true);
  const [step1, setStep1] = useState(false);
  const [step1Complete, setStep1Complete] = useState(false);
  const [step2, setStep2] = useState(false);
  const [step2Complete, setStep2Complete] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step3Complete, setStep3Complete] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step4Complete, setStep4Complete] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step5Complete, setStep5Complete] = useState(false);
  const [done, setDone] = useState(false);

  const value = {
    loading,
    setLoading,
    isMarried,
    setIsMarried,
    name,
    setName,
    income,
    setIncome,
    secondPerson,
    setSecondPerson,
    secondName,
    setSecondName,
    secondIncome,
    setSecondIncome,
    expenses,
    setExpenses,
    creditScore,
    setCreditScore,
    step1,
    setStep1,
    step1Complete,
    setStep1Complete,
    intro,
    setIntro,
    step2,
    setStep2,
    step2Complete,
    setStep2Complete,
    step3,
    setStep3,
    step3Complete,
    setStep3Complete,
    step4,
    setStep4,
    step4Complete,
    setStep4Complete,
    step5,
    setStep5,
    step5Complete,
    setStep5Complete,
    downPayment,
    setDownPayment,
    done,
    setDone
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
