import AboutMe from 'src/components/Articles/AboutMe';
import Achievements from 'src/components/Articles/Achievements';
import { AdditionalInfo } from 'src/components/Articles/AdditionalInfo';
import { ContactInformation } from 'src/components/Articles/ContactInformation';
import Professional from 'src/components/Articles/Professional';
import Skills from 'src/components/Articles/Skills';
import { Footer } from 'src/components/Footer/Footer';
import { Header } from 'src/components/Header/Header';

const Page: React.FC<PageProps> = () => {
  return (
    <main>
      <Header />

      <div
        className="container"
        style={{
          minHeight: 'calc(100vh - 100px)',
        }}
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <AboutMe />
          <ContactInformation />
        </div>

        {/* <div className="mt-12">
          <Skills />
        </div>
µ
        <div className="mt-12">
          <Professional />
        </div>

        <div className="mt-12">
          <Achievements />
        </div>

        <div className="mt-12">
          <AdditionalInfo />
        </div> */}
      </div>
      <div
        style={{
          height: '100px',
        }}
      >
        <Footer />
      </div>
    </main>
  );
};

export default Page;
