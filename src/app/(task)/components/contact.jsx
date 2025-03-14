import { arrow, dropArrow } from "@/app/components/icons";

const ContactForm = () => {
  return (
    <div className="">
      <div className="lg:w-[400px] xl:w-[100%] gap-12 rounded-lg p-4 md:p-8 border border-[#D9D9D9]">
        <div className="flex flex-col px-2 text-center md:text-start">
          <h1 className="text-2xl md:text-4xl font-recoleta font-normal capitalize mb-2 md:inline-flex md:flex-wrap gap-1 md:gap-0.5">
            Got An Idea?{" "}
            <span className="md:hidden">
              We’ve <span className="text-[#7165FF]">Got The Skills</span>.
            </span>
            <span className="hidden md:flex lg:text-n md:text-[#DF56FE]">
               We’ve Got The Skills.
            </span>
          </h1>

          <p className="xl:w-90 font-normal text-sm md:text-xl text-[#4E4E4E] mb-6">
            Fill out our contact form and we’ll get in touch!
          </p>
        </div>

        <form className="">
          <div>
          <label className="font-open-sans font-normal text-sm md:text-[16px]">Name</label>
            {/* <label className="font-normal text-sm md:text-[16px]">Name</label> */}
            <input
              type="text"
              placeholder="Enter name"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3]  placeholder:text-[12px] md:placeholder:text-[16px]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans font-normal text-sm md:text-[16px]">Last Name</label>
            <input
              type="text"
              placeholder="enter last name"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans font-normal text-sm md:text-[16px]">E-mail</label>
            <input
              type="email"
              placeholder="email@gmail.com"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px]"
              required
            />
          </div>
          {/* <div>
            <label className="text-sm">Phone number</label>
            <div className="flex gap-2 my-2">
              <select className="px-3 py-2 text-[#B3B3B3] border border-[#D9D9D9] rounded-md">
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <input
                type="text"
                placeholder="+92"
                className="flex-1 px-3 py-2 rounded-lg text-[#B3B3B3] border border-[#D9D9D9]"
                required
              />
            </div>
          </div> */}
          <div>
            <label className="font-open-sans text-sm md:text-[16px]">Phone number</label>
            <div className="flex flex-wrap gap-2 my-2">
              <div className="relative">
                <select className="appearance-none px-3 py-2 pr-8 text-[#B3B3B3] border border-[#D9D9D9] rounded-lg text-[12px] md:text-[16px]">
                  <option>Pakistan</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                  {dropArrow}
                </div>
              </div>
              <input
                type="text"
                placeholder="+92"
                className="flex-1 min-w-0 px-3 py-1 rounded-lg text-[#B3B3B3] border border-[#D9D9D9] placeholder:text-[12px] md:placeholder:text-[16px]"
                required
              />
            </div>
          </div>

          {/* <div>
            <label className="text-sm">Solution</label>
            <select className="w-full my-2 px-3 py-2 text-[#B3B3B3] border border-[#D9D9D9] rounded-lg">
              <option>Select service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>AI Solutions</option>
            </select>
          </div> */}
          <div className="relative">
            <label className="font-open-sans text-sm md:text-[16px]">Solution</label>
            <select className="w-full my-2 px-3 py-2 text-[#B3B3B3] border border-[#D9D9D9] rounded-lg appearance-none pr-10 text-[12px] md:text-[16px]">
              <option>Select service</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>UI/UX Design</option>
              <option>AI Solutions</option>
            </select>
            <div className="absolute inset-y-0 right-2 top-5 flex items-center pointer-events-none">
              {dropArrow}
            </div>
          </div>

          <div>
            <label className="font-open-sans text-sm md:text-[16px]">How did you hear about us?</label>
            <input
              type="text"
              placeholder="Add details"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px]"
              required
            />
          </div>
          <div>
            <label className="font-open-sans text-sm md:text-[16px]">Tell us about your project</label>
            <input
              placeholder="Add details"
              className="w-full px-3 py-2 my-2 border border-[#D9D9D9] rounded-lg placeholder-[#B3B3B3] placeholder:text-[12px] md:placeholder:text-[16px]"
              required
            />
          </div>
          <button className="font-mulish-bold text-lg w-full py-4 my-2.5 bg-[#7165FF] text-white rounded-lg leading-[32px]">
            Submit
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-2 md:hidden items-start my-6 p-5 w-full rounded-lg text-center bg-[#7165FF33]">
        <div className="flex flex-col gap-2">
          <h3 className=" text-left font-recoleta font-normal text-2xl">
            Schedule a call
          </h3>
          <p className="text-left font-normal text-sm md:text-[20px]">
            Feel free to select a time at your convenience!
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="font-poppins font-bold text-sm text-[#7165FF] flex gap-1"
          >
            Let’s Talk
          </a>
          <span>{arrow}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
