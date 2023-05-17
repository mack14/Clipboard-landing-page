import React from "react";

const Workflow = () => {
  return (
    <div className="workflow">
      <div className="workflow-text">
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity.</p>
      </div>
      <div className="workflow--content">
        <div className="workflow--content-1">
          <div className="workflow--content-1--img">
            <img src="images/icon-blacklist.svg" alt="" />
          </div>
          <div className="workflow--content-1--text">
            <h2>Create blacklists</h2>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
        </div>
        <div className="workflow--content-2">
          <div className="workflow--content-2--img">
            <img src="images/icon-text.svg" alt="" />
          </div>
          <div className="workflow--content-2--text">
            <h2>Plain text snippets</h2>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
        </div>
        <div className="workflow--content-3">
          <div className="workflow--content-3--img">
            <img src="images/icon-preview.svg" alt="" />
          </div>
          <div className="workflow--content-3--text">
            <h2>Sneak preview</h2>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
