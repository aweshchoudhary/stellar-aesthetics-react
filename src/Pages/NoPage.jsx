import { Link } from "react-router-dom";
import menu from "../data/menu.json";
import { Helmet } from "react-helmet";
import { lazy } from "react";

const Section = lazy(() => import("../Components/Main/Section"));

const NoPage = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
      </Helmet>
      <Section className={"h-[600px]"}>
        <div className="text-center flex items-center flex-col justify-center">
          <h1 className="md:text-6xl text-3xl font-semibold text-primary">
            404 Not Found
          </h1>
          <p className="md:text-3xl text-2xl font-medium">
            Oopps Page Not Found
          </p>
          <p className="md:text-xl text-lg mt-5 mb-3">
            Looking For These Pages
          </p>
          <ul className="flex flex-wrap items-center md:gap-5 gap-2 justify-center">
            {menu.map((item) => {
              return (
                <li className="list-none font-medium text-lg underline text-h-primary">
                  <Link
                    aria-label="link"
                    style={{ textDecoration: "underline" }}
                    to={item.link}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default NoPage;
