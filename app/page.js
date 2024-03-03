import React from "react";
import Button from "@/Components/Button";
import Marquee from "react-fast-marquee";
import Cards from "@/Components/Cards";

function page() {
  return (
    <>
      <div className=" container mx-auto px-8 md:pb-16 pb-12">
        <div className=" flex flex-col md:flex-row md:gap-10 2xl:gap-20 xl:gap-16  lg:gap-12 ">
          <div className=" flex flex-col items-start justify-arround lg:mt-12 md:mt-8 xl:mt-20 lg:gap-8 md:gap-6 gap-4 md:w-3/5 ">
            <h1 className="text-red-950 font-semibold text-2xl 2xl:text-7xl xl:text-6xl lg:text-5xl tracking-wide ">
              Driving <span className="text-red-500">Impact for Africans</span>{" "}
              through Tech Empowerment
            </h1>
            <div>
              <p className=" text-left lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                We are enhancing the economic potential of African youth by
                equipping them with technological skills, fostering a supportive
                community, creating employment opportunities, and opening doors
                to new possibilities.
              </p>
            </div>
            <div className="flex space-x-8">
              <Button text="Apply Now" />
              <button
                className={` lg:p-4 lg:px-10 md:px-8  p-3 px-6 font-normal rounded-lg text-red-950 border border-red-950 bg-transparent`}>
                Partner with us
              </button>
            </div>
            <div className="flex gap-6">
              <div className=" flex flex-col  items-start justify-center gap-2">
                <img
                  src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649023ddfa7af9474d793423_Group.svg"
                  className="w-10 h-10 lg:w-15 lg:h-15"
                />
                <h2 className=" text-red-950 md:text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl text-2xl  font-bold">
                  <span>12</span>k+
                </h2>
                <p className="text-red-950 text-base">Professionals</p>
              </div>
              <div className="border border-red-950"></div>
              <div className="flex flex-col  items-start justify-center gap-2">
                <img
                  src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649023dd8b383baeda53584a_Group-1.svg"
                  className="w-10 h-10 lg:w-15 lg:h-15"
                />
                <h2 className=" text-red-950 md:text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl text-2xl  font-bold">
                  45
                </h2>
                <p className="text-red-950 text-base">Skill Categories</p>
              </div>
              <div className="border border-red-950"></div>
              <div className="flex flex-col  items-start justify-center gap-2">
                <img
                  src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649023dd56d7a010b27cf240_Vector.svg"
                  className="w-10 h-10 lg:w-15 lg:h-15 "
                />
                <h2 className=" text-red-950 md:text-xl lg:text-2xl xl:text-3xl  2xl:text-4xl text-2xl font-bold">
                  115
                </h2>
                <p className="text-red-950 text-base ">Countries</p>
              </div>
            </div>
          </div>
          <div className=" bg-red-950 border rounded-3xl md:w-2/5 ">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/6490341588a81e8c18e6b8c8_Hero-img-p-800.webp"
              className=" h-fit w-fit 2xl:mt-16 xl:mt-14 lg:mt-12 md:mt-11"
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e4da8ebb8e9b7b388d2523_Divider%20Pattern.svg"
          className="w-full"
        />
      </div>

      <div className="w-full bg-red-950">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
          <div className="md:w-1/2">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/6490262e1bd2ee9b403bfbb2_Group%20202-p-800.webp"
              className="h-fit w-fit"
            />
          </div>
          <div className="container flex flex-col md:w-1/2 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-3">
            <div>
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-xs ">
                Breaking the Barrier to Tech
              </p>
              <h2 className="text-white font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl ">
                Making Tech Inclusive and Accessible
              </h2>
            </div>
            <div>
              <p className="text-white  lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                We are dedicated to breaking down the barriers that often hinder
                individuals from accessing opportunities in the tech industry.
                Understanding the challenges faced by aspiring tech enthusiasts,
                We actively work to eliminate obstacles and create a level
                playing field.
                <br />
                <br /> By providing accessible training programs, mentorship,
                and a supportive community, We ensure that no one is left behind
                due to financial constraints, lack of resources, or limited
                networks.
                <br /> <br />
                Through our inclusive approach, We are democratizing tech
                education and opening doors for individuals from diverse
                backgrounds to pursue their passion and thrive in the tech
                field.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div>
              <Button text="Get Started" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
          <div className="container flex flex-col md:w-2/5 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-3">
            <div>
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-xs">
                Timeless Skills
              </p>
              <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl ">
                Enabling Africans with Essential Skills for Today and Tomorrow
              </h2>
            </div>
            <div>
              <p className=" lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                Zuri is on a mission to empower Africans by equipping them with
                the essential skills required both in the present and future.
                Recognizing the transformative power of technology, We provide
                comprehensive training and resources to enable African youth to
                thrive in the digital age.
                <br />
                <br />
                By offering cutting-edge tech skills, We ensure that individuals
                are prepared to meet the demands of the rapidly evolving
                technological landscape. Through this empowerment, We are paving
                the way for African youth to unlock their full potential and
                become valuable contributors to the global tech community.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div>
              <Button text="Get Started" />
            </div>
          </div>
          <div className="md:w-3/5">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649027a60b02fd46e5e7ff47_Group%20203-p-800.webp"
              className="h-fit w-fit"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-red-950 bg-opacity-95">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
          <div className="md:w-3/5">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63efb0e916db97e83de35885_Report%202022.webp"
              className="h-fit w-fit"
            />
          </div>
          <div className="container flex flex-col md:w-2/5 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-3">
            <div>
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-xs">
                Performance
              </p>
              <h2 className="text-white font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl ">
                Download our Impact Report
              </h2>
            </div>
            <div>
              <p className="text-white lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                Our team of experts takes care of the handling and management of
                your training projects so you can focus on what matters most:
                your business. With our comprehensive approach and cutting-edge
                technology, we'll work with you every step of the way to create
                and deliver impactful, engaging training programs that drive
                results.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div>
              <Button text="Download our Impact Report" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="flex flex-col container mx-auto lg:py-24 py-20 px-8 gap-10 md:gap-12 lg:gap-14 xl:gap-16 ">
          <div className="flex md:flex-row flex-col gap-3 md:gap-12 lg:gap-16 2xl:gap-20 w-full">
            <div className="flex flex-col gap-1 md:gap-1 lg:gap-2 mb-3 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 w-2/3">
              <p className=" text-red-500  md:text-xs">Training Options</p>
              <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl">
                Entry level, intermediate, and up-skilling training options
              </h2>
            </div>
            <div className="w-1/3">
              <img
                src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e4d14b8c122b4bf943994d_Pattern%202.svg"
                className="w-fit h-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 ">
            <div className=" bg-amber-200 rounded-lg px-6 pb-10 pt-5 md:mb-8 lg:mb-6 xl:mb-4">
              <img
                src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649029187a627d3f20534626_Group%20175-p-500.webp"
                className="w-fit "
              />
              <p className=" text-red-950 text-lg font-bold md:mb-3 lg:mb-4 xl:mb-5 mb-3">
                Software Development
              </p>
              <p className="text-red-950 lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                This option focuses on the practical side of software
                development, while we touch on the theoretical basis that form
                these concepts, our main focus is in actual applications. We
                offer several options including full-stack development using
                different languages or specialty in certain tracks. Either way,
                choosing us will be giving yourself the advantage over others.
              </p>
            </div>
            <div className=" bg-red-950 rounded-lg px-6 pb-10 pt-5">
              <img
                src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649029187a627d3f20534626_Group%20175-p-500.webp"
                className="w-fit "
              />
              <p className=" text-white text-lg font-bold md:mb-3 lg:mb-4 xl:mb-5 mb-3">
                Product (UI/UX) Design
              </p>
              <p className="text-white lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                This option exposes you to the ins-and-outs of true product
                design. Here, you'll understand the core values and research
                principles that backs actual product development. Beyond UI, We
                also teach you how to understand the needs of the users,
                professionally handle stakeholders and ensure your product
                considers the users perspective (UX). Choose this course if you
                have a passion for research and applicable of results.
              </p>
            </div>
            <div className=" bg-purple-400 rounded-lg px-6 pb-10 pt-5 md:mb-8 lg:mb-6 xl:mb-4">
              <img
                src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649029187a627d3f20534626_Group%20175-p-500.webp"
                className="w-fit "
              />
              <p className=" text-red-950 text-lg font-bold md:mb-3 lg:mb-4 xl:mb-5 mb-3">
                Continuous Development Training
              </p>
              <p className="text-red-950 lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                If you are not a novice nor beginner, but wishes to keep
                improving on your skills by working on actual projects, CDT
                Gives you a chance to collaborate with others, add more projects
                to your portfolio and generally give you better work experience.
                The training runs in cycles of 3 months, and within each cycle,
                we ensure you build and complete at least 1 project.
              </p>
            </div>
          </div>
          <div className=" text-center">
            <Button text="Explore our Training" />
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
          <div className="md:w-3/5">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649029ef163c4990b02b4781_Frame%204056-p-800.webp"
              className="h-fit w-fit"
            />
          </div>
          <div className=" container flex flex-col md:w-2/5 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-3">
            <div>
              <br />
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-xs">
                Experienced Professional Trainers
              </p>
              <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl">
                Industry-Experienced counsellors and mentors.
              </h2>
            </div>
            <div>
              <p className=" lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                At Zuri, we are proud to have a team of professional and
                industry-experienced counselors and mentors who are committed to
                guiding and supporting our community. Our counselors bring a
                wealth of knowledge and expertise in various tech fields,
                ensuring that our members receive the best guidance and
                mentorship to navigate their career paths.
                <br />
                <br />
                Whether it's providing insights, sharing industry trends, or
                offering personalized advice, our counselors and mentors play a
                crucial role in empowering individuals to excel in their chosen
                tech professions.
                <br />
                <br />
                With their guidance, our members gain valuable insights, enhance
                their skills, and build the confidence needed to thrive in the
                tech industry.
              </p>
            </div>
            <div>
              <Button text="See the team" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="flex flex-col container mx-auto lg:py-24 py-20 px-8 w-7/10 justify-center">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" text-red-500  md:text-sm">
              We’re In The Business of Changing Lives
            </p>
            <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl mb-6 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12">
              We are dedicated to transforming lives and making a lasting impact
            </h2>
          </div>
          <div>
            <video
              src="https://assets-global.website-files.com/63e4cc8d2a…387ce9f_Screenshot%202023-07-01%20at%2007.25.webp"
              className="w-fit h-fit"></video>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="flex flex-col md:flex-row lg:gap-20 gap-8 md:gap-12 container mx-auto lg:py-28 py-24 px-8">
          <div className="container flex flex-col md:w-2/5 2xl:gap-5 xl:gap-4 lg:gap-3 md:gap-2 gap-3">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/63e4d14b8c122b4bf943994d_Pattern%202.svg"
              className="h-fit w-1/2"
            />
            <div>
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-sm">
                Hire Talents from Zuri
              </p>
              <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl ">
                Unlock the Potential of Zuri Graduates for Your Organization
              </h2>
            </div>
            <div>
              <p className=" lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                At Zuri, we are committed to nurturing exceptional talent in the
                tech industry. Our comprehensive training programs equip
                individuals with cutting-edge skills and empower them to excel
                in their careers.
                <br />
                <br />
                By hiring Zuri graduates, you gain access to a pool of highly
                skilled professionals who have undergone rigorous training and
                have a solid foundation in tech.
                <br />
                <br />
                Whether you're looking for developers, designers, data analysts,
                or other tech roles, our talented graduates are ready to
                contribute to the success of your organization.
                <br />
                <br />
                Join the growing list of companies that have benefited from
                hiring Zuri graduates and discover the transformative impact
                they can bring to your team.
              </p>
            </div>
            <div>
              <Button text="Hire Zuri Graduates" />
            </div>
          </div>
          <div className="md:w-3/5">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/64902f7b2be1642c542a8d6d_Frame%204006-p-800.webp"
              className="h-fit w-fit"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="flex flex-col md:flex-row lg:gap-14 gap-4 md:gap-8 container mx-auto lg:py-24 py-20 px-8">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20 md:z-10">
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649036e9cf962d0707cc7254_Rectangle%201501-p-500.webp"
              className="h-fit hidden md:block"
            />
            <img
              src="https://assets-global.website-files.com/63e4cc8d2ac61a3dee9bb0ee/649036ea768de9f4a302f745_Rectangle%201502-p-800.webp"
              className="h-fit w-fit"
            />
          </div>
          <div className=" bg-red-950 rounded-xl px-8 py-10 xl:px-20 xl:py-32 md:px-10 lg:px-16 md:py-12 lg:py-24 flex flex-col md:w-2/3 2xl:gap-4 xl:gap-3 lg:gap-2 md:gap-1 gap-3 md:z-0">
            <div>
              <p className=" text-red-500 lg:mb-2 xl:mb-3 2xl:mb-4  md:text-xs ">
                Support Us
              </p>
              <h2 className="text-white font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-7xl ">
                Support the Mission
              </h2>
            </div>
            <div>
              <p className="text-white  lg:text-sm xl:text-lg 2xl:text-xl  md:text-xs">
                We believe in the power of collective support to drive positive
                change. If you are passionate about transforming lives and
                empowering African youth through tech, there are various ways
                you can contribute and support our mission.
                <br />
                <br /> We believe in the power of collective support to drive
                positive change. If you are passionate about transforming lives
                and empowering African youth through tech, there are various
                ways you can contribute and support our mission.
                <br /> <br />
                Together, we can create a thriving ecosystem where African youth
                have access to the necessary resources, opportunities, and
                support to excel in the tech industry. Join us in our mission
                and be part of the transformation by supporting Zuri's training
                programs today.
                <br />
                <br />
                <br />
              </p>
            </div>
            <div>
              <Button text="Partner With Us" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-transparent">
        <div className="flex flex-col gap-10   lg:py-24 py-20 mx-auto ">
          <div className="flex flex-col gap-4 text-center ">
            <p className=" text-red-500  md:text-sm">Testimonials</p>
            <h2 className="text-red-950 font-semibold sm:text-2xl text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-6xl">
              What our beneficiaries say about us
            </h2>
          </div>
          <Marquee speed={50}>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </Marquee>
        </div>
      </div>
    </>
  );
}

export default page;
