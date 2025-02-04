import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
  <section className=" pb-52">
    <div className="container mx-auto px-3 md:px-10">
    <div className="px-5 py-32">
    <div className="text-[#F77F00] font-bold text-3xl mb-10">WHAT WE DO</div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Item 1 */}
    <div>
    <p className="text-xl font-bold text-white">01.</p>
      <h3 className="font-circular-web text-sm font-semibold text-blue-700">
        Our Vision
      </h3>
      <p className="font-circular-web text-lg text-gray-500">
      To be leading developers and implementers of digital content and eLearning technologies in teaching and learning.
      </p>
    </div>

    {/* Item 2 */}
    <div>
    <p className="text-xl font-bold text-white">02.</p>
      <h3 className="font-circular-web text-sm font-semibold text-blue-700">
        Our Mission
      </h3>
      <p className="font-circular-web text-lg text-gray-500">
      To provide an environment that is conducive to develop necessary expertise enriched by research driven solutions.
      </p>
    </div>

    {/* Item 3 */}
    <div>
      <p className="text-xl font-bold text-white">03.</p>
      <h3 className="font-circular-web text-sm font-semibold text-blue-700">
      Value Statement
      </h3>
      <p className="font-circular-web text-lg text-gray-500">
      Our core values define and guide the operations of our team. We embrace the core values by fronting them as our foundation in action and decision-making. 
      </p>
    </div>
  </div>
</div>


<div className="text-[#F77F00] font-bold text-6xl mb-10">OUR COURSES</div>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">

      
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
          className="text-black"
            src="videos/animation.mp4"
            title={
              <>
                Ani<b>mat</b>ion
              </>
            }
            // description="JOin Us and Learn how we Bring ideas to life with captivating animations that engage, inspire, and tell a story."
            
          />
        </BentoTilt>

       

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            src="img/dlearning.jpg"
            title={
              <>
                            grap<b>hi</b>c
                            de<b>sig</b>n
              </>
            }
            description="Building innovative software solutions tailored to drive your success."
            
          />
        </BentoTilt>
        <BentoTilt className="bento-tilt_2">
          <video
            src="videos/hero-2.mp4"
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"
          />
          
        </BentoTilt>

        

        <BentoTilt className="bento-tilt_2">
          <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re  cou<b>rs</b>es co<b>m</b>ing s<b>o</b>on.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </div>
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            
            title={
              <>
                ANIMATION USING<b></b>  AI
              </>
            }
            description="Creating stunning, AI-powered animations that redefine creativity and storytelling."
            isComingSoon
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);





  <><div className="text-[#F77F00] font-bold text-6xl mb-10">OUR PROJECTS</div>
    <div className="grid h-[100vh] w-full grid-cols-2 grid-rows-2 gap-7">
  <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1">
    <BentoCard
      src="img/AGRA.jpeg"
      title={<> A <b>GR</b>A </>}
      description="Alliance for a Green Resolution in Africa."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_1 md:col-span-1">
    <BentoCard
      src="img/barclays.webp"
      title={<> G<b>I</b> Z </>}
      // description="Banking means Barclays."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/kidscancode.webp"
      title={<> Kids <b>can</b>code </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/blended.avif"
      title={<> FI <b>I</b>PS </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/blended.avif"
      title={<> Ready <b>To</b>Work </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/blendedlearning.jpg"
      title={<> Mobile <b>Lear</b>ning </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>


  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/blended.avif"
      title={<> Content <b>dev</b>lopment </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>


  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/mastercard.png"
      title={<> Master <b>card</b>Foundation </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/UNHCR.png"
      title={<> UNH <b>C</b>R </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>

  <BentoTilt className="bento-tilt_2">
    <BentoCard
      src="img/IJM.jpeg"
      title={<> I <b>J</b>M </>}
      // description="Learn how we integrate AI into creative projects."
      isImage={true} />
  </BentoTilt>


  <BentoTilt className="bento-tilt_2">
    <div className="flex size-full flex-col justify-between bg-green-400 p-5">
      <h1 className="bento-title special-font max-w-64 text-black">
        More <b>Pro</b>jects Coming <b>So</b>on.
      </h1>
      <TiLocationArrow className="m-5 scale-[5] self-end" />
    </div>
  </BentoTilt>
</div></>



export default Features;
