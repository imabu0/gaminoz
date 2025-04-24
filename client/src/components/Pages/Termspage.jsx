import React from "react";

export const Termspage = () => {
  return (
    <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] m-auto mt-10">
      <div>
        <img src="img/logo.png" alt="logo" className="w-[80px] h-[66.07px] m-auto" />
      </div>
      <h1 className="text-[30px] text-center md:text-[50px] font-medium">
        Terms and Conditions
      </h1>
      <div className="mt-4 flex flex-col gap-5">
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            1. Introduction
          </h1>
          <br />
          <p>
            Welcome to Gaminoz! These terms and conditions outline the rules and
            regulations for the use of our website, located at [gaminoz.co]. By
            accessing this website, we assume you accept these terms and
            conditions. Do not continue to use Gaminoz if you do not agree to
            all of the terms and conditions stated on this page.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            2. Use of the Website
          </h1>
          <br />
          <p>
            Gaminoz offers free HTML5 games that can be played online. Users are
            not allowed to download or distribute these games without
            permission. Access to and use of the website is conditional upon
            your acceptance of and compliance with these Terms.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            3. Intellectual Property Rights
          </h1>
          <br />
          <p>
            The games available on Gaminoz are licensed under multiple licenses.
            We do not claim ownership of any game available on the platform. The
            respective game developers and license holders retain all rights to
            their games. You may not copy, modify, distribute, or sell any game
            content from this website without the appropriate license holder's
            consent.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            4. User Responsibilities
          </h1>
          <br />
          <p>
            - Users must use the website for lawful purposes only. <br />
            - Users must not attempt to hack, damage, or disrupt the
            functionality of Gaminoz. <br />- Users are responsible for any
            content they post or share on the website and must ensure it does
            not violate any laws or the rights of third parties.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            5. Limitations of Liability
          </h1>
          <br />
          <p>
            Gaminoz will not be held liable for any damages that may arise from
            the use of this website, including, but not limited to, direct,
            indirect, incidental, punitive, or consequential damages. This
            includes loss of data, revenue, or profit, or any other type of
            damage.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            6. Third-Party Links
          </h1>
          <br />
          <p>
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Gaminoz. We have no control over
            and assume no responsibility for the content, privacy policies, or
            practices of any third-party sites or services.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            7. Changes to Terms and Conditions
          </h1>
          <br />
          <p>
            We reserve the right to amend these terms and conditions at any
            time. Any changes will be posted on this page, and it is your
            responsibility to review these terms regularly.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            8. Contact Information
          </h1>
          <br />
          <p>
            If you have any questions about these Terms, please contact us at{" "}
            <span className="text-[#e79e0d]">[contact@gaminoz.co]</span>.
          </p>
        </div>
        <br />
        <br />
      </div>
      <p>Last Updated: August 26, 2024</p>
    </div>
  );
};
