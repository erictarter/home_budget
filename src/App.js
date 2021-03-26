import './App.scss';
import Nav from './components/Nav';
import LoadingSpinner from './components/LoadingSpinner';
import Start from './components/Start';
import Part1 from './components/Part1';
import Part2 from './components/Part2';
import Part3 from './components/Part3';
import Part4 from './components/Part4';
import Part5 from './components/Part5';
import Results from './components/Results';
import { ContextProvider } from './components/context/AppContext';

function App() {
  return (
    <div className='App'>
      <ContextProvider>
        <Nav></Nav>
        <div className='main'>
          <Start></Start>
          <Part1></Part1>
          <Part2></Part2>
          <Part3></Part3>
          <Part4></Part4>
          <Part5></Part5>
          <Results></Results>
          <LoadingSpinner></LoadingSpinner>
        </div>
      </ContextProvider>
    </div>
  );
}

export default App;

// HOME BUDGET - HOW MUCH HOUSE CAN YOU AFFORD??

// APP WILL ASK THE USER A SERIES OF QUESTIONS TO DETERMINE HOW EXPENSIVE OF A HOUSE THEY CAN AFFORD

// FIXED PROGRESS BAR WITH REMAINING STEPS

// USERNAME
// MARRIED SINGLE
// IF MARRIED

// HOUSEHOLD INCOME

// CAR PAYMENTS
// STUDENT LOANS
// CREDIT CARD BILLS

// CREDIT SCORE(S)
// IF SPOUSE WILL BE ON LOAN GET 2 CREDIT SCORES

// DOWN PAYMENTS

// AT THE END SHOW USER HOW MUCH HOUSE THEY CAN AFFORD AS WELL AS THE MONTHLY PAYMENT AND PROJECTED INTEREST%

// ----- FIRST COMMIT

// PART 1 CONDITIONS / CONTINUES WHEN ONLY STATUS IS CONFIRMED

// MOBILE
// NAV IST STILL TOO WIDE

// TRY <

// PART 1 INPUT TOO WIDE

//  TRY <

// PART 1 SINGLE/MARRIES BTNS ARE STILL IN A ROW / TEXT ISNT CENTERED

//  TRY FIRST PART <

// PART 2 IS GOOD

// PART 4 STILL NO PADDING ON 1st & LAST COLORS
