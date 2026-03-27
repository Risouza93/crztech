import emailjs from "@emailjs/browser";
import "./style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import Footer from "./components/Footer";
import { useForm } from "./hooks/useForm";
import { useScrollSpy } from "./hooks/useScrollSpy";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

export default function App() {
  const { form, status, loading, handleChange, handleSubmit } = useForm();
  const { scrollTo, scrollContato } = useScrollSpy();

  return (
    <>
      <Header onScrollContato={scrollContato} />
      <Nav scrollTo={scrollTo} />
      <main>
        <div className="container">
          <Sections
            form={form}
            status={status}
            loading={loading}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
