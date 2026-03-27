import emailjs from "@emailjs/browser";
import "./App.css";
import "./style.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sections from "./components/Sections";
import { useForm } from "./hooks/useForm";
import { useScrollSpy } from "./hooks/useScrollSpy";

emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

function App() {
  const { form, status, loading, handleChange, handleSubmit } = useForm();
  const { scrollTo, scrollContato } = useScrollSpy();

  return (
    <>
      <Header onScrollContato={scrollContato} />
      <Nav scrollTo={scrollTo} />
      <main className="container">
        <Sections
          form={form}
          status={status}
          loading={loading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </main>
      <footer>
        <p>© 2024 Richard Feitosa · AI Project Architect</p>
      </footer>
    </>
  );
}

export default App;
