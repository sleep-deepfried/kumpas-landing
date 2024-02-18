import Image from "next/image";
import Link from "next/link";

const Team = () => {
  return (
    <section id="team" className="flex flex-col items my-20 px-10 sm:px-24 gap-8">

      <div className="flex flex-col text-center">

      <p className="font-georama text-xl sm:text-3xl">
        MEET THE
      </p>

      <p className="font-bold text-3xl sm:text-6xl">
        TEAM
      </p>

      </div>

      <div className="grid grid-cols-2 sm:flex flex-col sm:flex-row gap-10 justify-center">

        <div className="p-5 rounded-2xl bg-secondary flex flex-col justify-center text-center items-center gap-2">

          <Image src="/images/team/luis.svg" alt="luis" width={215} height={200} />

          <p className="sm:text-2xl font-bold text-primary">
            LUIS MAVERICK GABRIEL
          </p>

          <p className="font-georama font-light text-[4px] sm:text-xs text-snow">
          Luis is the head officer in-charge in <br />
          developing Kumpas. He is currently the <br />
          AWSCC Haribon Captain and GDSC PLM <br />
          Data Lead
          </p>

          <p className="font-georama font-light text-[8px] sm:text-sm text-snow">
            CHIEF TECHNOLOGY OFFICER
          </p>

          <div className="flex flex-row gap-2">
            <Link href="https://www.facebook.com/Marebik" target="blank">
              <Image src="/images/team/fb.svg" alt="facebook" width={7} height={10} />
            </Link>
            <Link href="https://www.instagram.com/marebik" target="blank">
              <Image src="/images/team/ig.svg" alt="instagram" width={15} height={15} />
            </Link>
            <Link href="https://www.linkedin.com/in/lmlgabriel" target="blank">
              <Image src="/images/team/linkedin.svg" alt="linkedin" width={15} height={15
              } />
            </Link>
          </div>

        </div>

        <div className="p-5 rounded-2xl bg-secondary flex flex-col justify-center text-center items-center gap-2 ">

          <Image src="/images/team/earl.svg" alt="earl" width={180} height={200} />

          <p className="sm:text-2xl font-bold text-primary">
            EARL JOHN PULIDO
          </p>

          <p className="font-georama font-light text-[4px] sm:text-xs text-snow">
          Earl is the head officer in-charge in the <br />
          operations of Kumpas. He is currently the <br />
          AWS CC Haribon Co-Captain and ICpEP.se <br />
          PLM Treasurer<br />
          </p>

          <p className="font-georama font-light text-[8px] sm:text-sm text-snow">
            CHIEF OPERATIONS OFFICER
          </p>

          <div className="flex flex-row gap-2">
            <Link href="https://www.facebook.com/sleep.deepfried" target="blank">
              <Image src="/images/team/fb.svg" alt="facebook" width={7} height={10} />
            </Link>
            <Link href="https://www.instagram.com/eljon.py" target="blank">
              <Image src="/images/team/ig.svg" alt="instagram" width={15} height={15} />
            </Link>
            <Link href="https://www.linkedin.com/in/sleep-deepfried" target="blank">
              <Image src="/images/team/linkedin.svg" alt="linkedin" width={15} height={15
              } />
            </Link>
          </div>

        </div>

        <div className="p-5 rounded-2xl bg-secondary flex flex-col justify-center text-center items-center gap-2">

          <Image src="/images/team/ricki.png" alt="ricki" width={200} height={200} />

          <p className="sm:text-2xl font-bold text-primary">
            RICKI MAE VICENTE
          </p>

          <p className="font-georama font-light text-[8px] sm:text-sm text-snow">
            Ricki is the executive officer of Kumpas. She <br />
            is currently the College of Engineering <br />
            Secretariat Head and volunteer <br />
            of Operations Department of GDSC PLM <br />
          </p>

          <p className="font-georama font-light text-[4px] sm:text-xs text-snow">
            CHIEF EXECUTIVE OFFICER
          </p>

          <div className="flex flex-row gap-2">
            <Link href="https://www.facebook.com/itsmerickimae" target="blank">
              <Image src="/images/team/fb.svg" alt="facebook" width={7} height={10} />
            </Link>
            <Link href="https://www.instagram.com/itsmerickimae/" target="blank">
              <Image src="/images/team/ig.svg" alt="instagram" width={15} height={15} />
            </Link>
            <Link href="https://www.linkedin.com/in/ricki-mae-vicente-aa70b6232/" target="blank">
              <Image src="/images/team/linkedin.svg" alt="linkedin" width={15} height={15
              } />
            </Link>
          </div>

        </div>

        <div className="p-5 rounded-2xl bg-secondary flex flex-col justify-center text-center items-center gap-2">

          <Image src="/images/team/vince.svg" alt="vince" width={200} height={200} />

          <p className="sm:text-2xl font-bold text-primary">
            VINCE VILLANUEVA
          </p>

          <p className="font-georama font-light text-[8px] sm:text-sm text-snow">
            Vince is the research and development head. <br />
            He is the GDSC PLM Community Relations <br />
            Lead and senior officer under Secretariat <br />
            Committee of CEng
          </p>

          <p className="font-georama font-light text-[4px] sm:text-xs text-snow">
            RESEARCH & DEVELOPMENT OFFICER
          </p>

          <div className="flex flex-row gap-2">
            <Link href="https://www.facebook.com/vince.villanueva.355" target="blank">
              <Image src="/images/team/fb.svg" alt="facebook" width={7} height={10} />
            </Link>
            <Link href="https://www.instagram.com/itsvincemv" target="blank">
              <Image src="/images/team/ig.svg" alt="instagram" width={15} height={15} />
            </Link>
            <a href="https://www.linkedin.com/in/vince-villanueva-392124260" target="blank">
              <Image src="/images/team/linkedin.svg" alt="linkedin" width={15} height={15
              } />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Team;
export const teamId = "team";
