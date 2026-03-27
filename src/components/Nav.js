import { memo } from "react";

const NAV_ITEMS = [
  { id: "sobre",    label: "Sobre"    },
  { id: "projetos", label: "Projetos" },
  { id: "stack",    label: "Stack"    },
  { id: "contato",  label: "Contato"  },
];

const Nav = memo(function Nav({ scrollTo, activeId }) {
  return (
    <nav aria-label="Navegação principal">
      <div className="nav-container">
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`nav-link${activeId === id ? " active" : ""}`}
            onClick={() => scrollTo(id)}
            aria-label={`Ir para seção ${label}`}
            aria-current={activeId === id ? "true" : undefined}
          >
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
});

export default Nav;
