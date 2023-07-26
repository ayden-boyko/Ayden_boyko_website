function startAnimations(animateElements: NodeListOf<Element>) {
  animateElements.forEach((animateElement) => {
    const animateNode = animateElement as SVGAnimateElement;
    animateNode.beginElement();
  });
}

function SvgAnimator(path: string) {
  fetch(path)
    .then((response) => response.text())
    .then((svgData) => {
      const parser = new DOMParser();
      const svgDocument = parser.parseFromString(svgData, "image/svg+xml");
      console.log(svgDocument);
      const animateElements = svgDocument.querySelectorAll("animate");

      const svgContainer = document.getElementById("svgContainer");
      if (svgContainer === null) {
        console.error("Error loading SVG file");
      } else {
        svgContainer.appendChild(svgDocument.documentElement);
        console.log(animateElements);
        startAnimations(animateElements);
      }
    });
}

export default SvgAnimator;
