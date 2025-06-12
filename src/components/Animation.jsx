import AOS from 'aos'
import 'aos/dist/aos.css'

const Animation = () => {
  useEffect(() => {
    AOS.init({ duration: 100 })

  }, [])
};

export default Animation;
