import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

const App = () => {

  return (
    <div className="text-blue-500 font-bold flex-center h-[100vh]" >
      Работает ли?

    </div>
  );
};

export default App;