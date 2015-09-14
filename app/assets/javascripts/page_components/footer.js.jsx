FooterDefinition = {};

FooterDefinition.render = function () {
  return (
    <span id="footer">
      Interested in listing your agency on Clockwork Contribution? <a href="/agencies/new">Find out how here.</a>
    </span>
  );
};

Footer = React.createClass(FooterDefinition);
