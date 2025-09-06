import PageNavigation from '../components/PageNavigation';
import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';

const AboutPage = () => {
  


  return (
    <div className='my-12 md:my-32'>
      <AboutMe />
      <Timeline />
      <div className="hide-on-small">
        <PageNavigation
          nextPage="/projects"
          nextPageName="projects"     
        />
      </div>

    </div>
  );
};

export default AboutPage;
