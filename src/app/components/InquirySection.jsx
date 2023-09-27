import React from "react";

function InquirySection() {
  return (
    <section className="block-content inquiry_block mg_full-content">
      <div className="inquiry_block-wrapper v-align-gap-1 ">
        <h4 className="colored-white uppercase text-center">
          Unsure where to start?
        </h4>
        <p className="colored-grey">
          Fill out the form below with your information and any question you may
          have. I’ll get in touch with you as soon as possible.
        </p>
        <div className="inquiry-form-container">
          <iframe
            className="form_iframe"
            src="https://api.leadconnectorhq.com/widget/form/hClFVIVro4WMlOzBEnsR"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            id="inline-hClFVIVro4WMlOzBEnsR"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Inquiry Form"
            data-height="450"
            data-layout-iframe-id="inline-hClFVIVro4WMlOzBEnsR"
            data-form-id="hClFVIVro4WMlOzBEnsR"
            title="Inquiry Form"
          ></iframe>
          <script src="https://link.msgsndr.com/js/form_embed.js"></script>
        </div>
      </div>
    </section>
  );
}

export default InquirySection;
