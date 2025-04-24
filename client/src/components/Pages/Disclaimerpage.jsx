import React from "react";

export const Disclaimerpage = () => {
  return (
    <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] m-auto mt-10">
      <div>
        <img src="img/logo.png" alt="logo" className="w-[80px] h-[66.07px] m-auto" />
      </div>
      <h1 className="text-[30px] text-center md:text-[50px] font-medium">
        Disclaimer
      </h1>
      <div className="mt-4 flex flex-col gap-5">
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            1. General Disclaimer
          </h1>
          <br />
          <p>
            The games and content provided on Gaminoz are for entertainment
            purposes only. Gaminoz does not make any warranties about the
            completeness, reliability, and accuracy of the content on this site.
            Any action you take upon the information or games on this website is
            strictly at your own risk.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            2. Licensing Disclaimer
          </h1>
          <br />
          <p>
            The games available on Gaminoz may be licensed to multiple entities.
            Gaminoz does not claim exclusive rights to any of the games featured
            on the site. If you believe your rights are being infringed, please
            contact us immediately at [contact email], and we will take
            appropriate action.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            3. Limitation of Liability
          </h1>
          <br />
          <p>
            Gaminoz will not be liable for any losses or damages in connection
            with the use of our website. This includes, but is not limited to,
            indirect or consequential loss or damage, or any loss or damage
            whatsoever arising from the loss of data or profits arising out of,
            or in connection with, the use of this website.
          </p>
        </div>
        <div>
          <h1 className="text-[22px] font-medium text-[#e79e0d]">
            4. No Professional Advice
          </h1>
          <br />
          <p>
            The content on this site should not be considered as professional
            advice. For specific advice regarding legal, financial, or personal
            issues, consult a qualified professional.
          </p>
        </div>

        <br />
        <br />
      </div>
      <p>Last Updated: August 26, 2024</p>
    </div>
  );
};
