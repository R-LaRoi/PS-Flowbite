import React from "react";
import Nav from "../../Nav";
import "./contact.css";
export default function Contact() {
  return (
    <>
      <Nav />
      <section>
        {" "}
        <div className="ct-container h-screen">
          <div className="ct-col-1 ">
            <img
              className="h-15 w-15 mx-auto mt-10 rounded-full p-6"
              src="https://github.com/R-LaRoi/tsam-vite/assets/114012059/5aa9e3cc-0f7c-4dab-81bf-86cd1436d8da"
            ></img>
          </div>
          <div className="ct-col-2">
            <h1 className="ct-title text-gray-800">meet pat stroy</h1>
            <p className="ct-text">
              Visual artist, specializing in graphic design. Washington, D.C.
              native Patricia Stroy, dedicated thirty years of service as an
              Illustrator for Walter Reed Army Institute of Research. Patricia
              has studied Art and Design at the Corcoran School of Art. Her
              practice encompasses a variety of art forms including drawing,
              painting and graphic arts. Weaving technology throughout her
              process has led her to design extraordinary vibrant patterns. She
              is currently accepting commissions.{" "}
            </p>
          </div>
        </div>
      </section>

      <section className=" ct-section-two">
        <h1 className="ct-title text-slate-50" style={{ color: "white" }}>
          get in touch
        </h1>

        <section className="mx-auto mb-12 ">
          <article>
            <h2 className="ct-text p-12 text-slate-50">
              Would love to hear from you! <br />
              If you are interested in requesting original works or prints,
              please feel free to connect via email.{" "}
            </h2>
            <br />
            <br />
            <section className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-1 lg:grid-cols-3">
              <article
                className="group relative h-64 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition  duration-300 ease-in-out hover:shadow-2xl"
                style={{
                  backgroundImage:
                    " url('https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/84bf3b6b-ad4c-4bf8-8008-9aee5fce21fd')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
                <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
                  <h3 className="text-center">
                    <a
                      className="text-center text-2xl font-bold text-white"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5.2rem"
                        height="5.2rem"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a9 9 0 0 1 1.141.195v3.325a9 9 0 0 0-.653-.036a27 27 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.7 1.7 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </article>
              <article
                className="group relative h-64 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition  duration-300 ease-in-out hover:shadow-2xl"
                style={{
                  backgroundImage:
                    " url('https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/58d8aa51-ba26-47e3-b981-20b72569f462')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
                <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
                  <h3 className="text-center">
                    <a
                      className="text-center text-2xl font-bold text-white"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5.2rem"
                        height="5.2rem"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M13.372 2.094a10.003 10.003 0 0 0-5.369 19.074a7.756 7.756 0 0 1 .162-2.292c.185-.839 1.296-5.463 1.296-5.463a3.738 3.738 0 0 1-.324-1.577c0-1.485.857-2.593 1.923-2.593a1.334 1.334 0 0 1 1.342 1.508c0 .9-.578 2.262-.88 3.54a1.544 1.544 0 0 0 1.575 1.923c1.897 0 3.17-2.431 3.17-5.301c0-2.201-1.457-3.847-4.143-3.847a4.746 4.746 0 0 0-4.93 4.793a2.96 2.96 0 0 0 .648 1.97a.48.48 0 0 1 .162.554c-.046.184-.162.623-.208.785a.354.354 0 0 1-.51.253c-1.384-.554-2.036-2.077-2.036-3.816c0-2.847 2.384-6.255 7.154-6.255c3.796 0 6.319 2.777 6.319 5.747c0 3.909-2.176 6.848-5.393 6.848a2.861 2.861 0 0 1-2.454-1.246s-.579 2.316-.692 2.754a8.025 8.025 0 0 1-1.019 2.131c.923.28 1.882.42 2.846.416a9.988 9.988 0 0 0 9.996-10.002a10.002 10.002 0 0 0-8.635-9.904"
                        />
                      </svg>
                      <span className="absolute inset-0"></span>
                    </a>
                  </h3>
                </div>
              </article>
              <article
                className="group relative h-64 w-full overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition  duration-300 ease-in-out hover:shadow-2xl"
                style={{
                  backgroundImage:
                    " url('https://github.com/R-LaRoi/PS-Flowbite/assets/114012059/784b1957-0271-46a3-9a74-ab628ef08295')",
                }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50 transition duration-300 ease-in-out group-hover:opacity-75"></div>
                <div className="relative flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-4">
                  <h3 className="text-center">
                    <a
                      className="text-center text-2xl font-bold text-white"
                      href="#"
                    >
                      <span className="absolute inset-0"></span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5.2rem"
                        height="5.2rem"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M19.07 13.88L13 19.94V22h2.06l6.06-6.07m1.58-2.35l-1.28-1.28a.52.52 0 0 0-.38-.17c-.15.01-.29.06-.39.17l-1 1l2.05 2l1-1c.19-.2.19-.52 0-.72M11 18H4V8l8 5l8-5v2h2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7zm9-12l-8 5l-8-5z"
                        />
                      </svg>
                    </a>
                  </h3>
                </div>
              </article>
            </section>
          </article>
        </section>
      </section>
    </>
  );
}

// https://github.com/R-LaRoi/tsam-vite/assets/114012059/5aa9e3cc-0f7c-4dab-81bf-86cd1436d8da
