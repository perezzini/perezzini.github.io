/* @ds-bundle: {"format":3,"namespace":"PerezziniDesignSystem_33c6f1","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"BlogCard","sourcePath":"components/core/BlogCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"NavPill","sourcePath":"components/core/NavPill.jsx"},{"name":"SocialIcon","sourcePath":"components/core/SocialIcon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"576a0abba3d7","components/core/BlogCard.jsx":"2fec2b3eba93","components/core/Button.jsx":"324385a4da57","components/core/NavPill.jsx":"e4bc80e85ee4","components/core/SocialIcon.jsx":"52d3d3dddf03","components/core/Tag.jsx":"e2e0d53107e8","ui_kits/website/EssayPost.jsx":"e4787c6acba2","ui_kits/website/Essays.jsx":"f570f2c36892","ui_kits/website/Home.jsx":"7f458c3d47f8","ui_kits/website/Publications.jsx":"fd1db54a5c8c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PerezziniDesignSystem_33c6f1 = window.PerezziniDesignSystem_33c6f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — a circular portrait. When `ring` is true it carries
 * the signature paper-gap + navy halo (--ring-avatar).
 */
function Avatar({
  src,
  alt = '',
  size = 112,
  ring = true,
  ...rest
}) {
  const style = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-full)',
    objectFit: 'cover',
    display: 'block',
    boxShadow: ring ? 'var(--ring-avatar)' : 'none'
  };
  return /*#__PURE__*/React.createElement("img", _extends({
    src: src,
    alt: alt,
    style: style
  }, rest));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/BlogCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BlogCard — an essay preview: small date, navy serif title
 * link, gray description. Left-aligned, no border or fill.
 */
function BlogCard({
  title,
  description,
  date,
  href = '#',
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, rest), /*#__PURE__*/React.createElement("time", {
    style: {
      display: 'block',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      marginBottom: '4px'
    }
  }, date), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      marginBottom: '4px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontSize: 'var(--text-body)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--link)',
      letterSpacing: 'var(--tracking-tight)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '2px'
    }
  }, title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-button)',
      color: 'var(--text-secondary)',
      textAlign: 'left',
      margin: 0,
      lineHeight: 'var(--leading-body)'
    }
  }, description));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the brand's pill-shaped action. Two variants:
 * `primary` (navy fill) and `outline` (navy hairline on paper).
 * Renders an <a> when `href` is given, otherwise a <button>.
 * Icons come from Font Awesome (pass a className like
 * "fa-solid fa-cloud-arrow-down" via `icon`).
 */
function Button({
  children,
  variant = 'primary',
  href,
  icon,
  iconRight = false,
  disabled = false,
  onClick,
  type = 'button',
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: 'var(--pad-button-y) var(--pad-button-x)',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-button)',
    fontWeight: 'var(--weight-regular)',
    lineHeight: 1,
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    border: '1px solid transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out), opacity var(--dur-fast) var(--ease-out)',
    opacity: disabled ? 0.4 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    WebkitTapHighlightColor: 'transparent'
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--btn-primary-bg)',
      color: 'var(--btn-primary-fg)',
      borderColor: 'var(--btn-primary-bg)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--btn-outline-fg)',
      borderColor: 'var(--btn-outline-border)'
    }
  };
  const style = {
    ...base,
    ...(variants[variant] || variants.primary)
  };
  const ico = icon ? /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }) : null;
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, ico && !iconRight ? ico : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, ico && iconRight ? ico : null);
  if (href) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style,
      onClick: onClick
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/NavPill.jsx
try { (() => {
/**
 * NavPill — the floating, glassmorphic top navigation. A
 * centered pill that blurs the warm page behind it. Pass an
 * array of { label, href } and the active label.
 */
function NavPill({
  items = [],
  active,
  floating = true
}) {
  const nav = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '2px',
    padding: '4px',
    background: 'var(--surface-glass)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid var(--border-glass)',
    borderRadius: 'var(--radius-pill)',
    whiteSpace: 'nowrap',
    boxShadow: 'var(--shadow-glass)',
    ...(floating ? {
      position: 'fixed',
      top: '20px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 1000
    } : {})
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: nav
  }, items.map(it => /*#__PURE__*/React.createElement(NavLink, {
    key: it.label,
    item: it,
    active: it.label === active
  })));
}
function NavLink({
  item,
  active
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    padding: '6px 16px',
    borderRadius: 'var(--radius-pill)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-meta)',
    fontWeight: 'var(--weight-regular)',
    textDecoration: 'none',
    lineHeight: 1.3,
    color: active ? 'var(--nav-active-fg)' : 'var(--nav-link-fg)',
    background: active ? 'var(--nav-active-bg)' : hover ? 'var(--hover-tint)' : 'transparent',
    transition: 'background var(--dur-fast) var(--ease-out), color var(--dur-fast) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: item.href,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, item.label);
}
Object.assign(__ds_scope, { NavPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NavPill.jsx", error: String((e && e.message) || e) }); }

// components/core/SocialIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SocialIcon — a bare Font Awesome glyph link, gray by default,
 * navy on hover. Used in the footer social row.
 */
function SocialIcon({
  icon,
  href,
  label,
  size = 24,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const style = {
    color: hover ? 'var(--social-fg-hover)' : 'var(--social-fg)',
    fontSize: size,
    textDecoration: 'none',
    lineHeight: 1,
    display: 'inline-flex',
    transition: 'color var(--dur-fast) var(--ease-out)'
  };
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noopener noreferrer",
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { SocialIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SocialIcon.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — a small pill chip on Apple-light fill with navy text.
 * Used for essay topics / metadata labels.
 */
function Tag({
  children,
  ...rest
}) {
  const style = {
    display: 'inline-block',
    backgroundColor: 'var(--surface-subtle)',
    color: 'var(--tag-fg)',
    fontFamily: 'var(--font-ui)',
    fontSize: 'var(--text-meta)',
    fontWeight: 'var(--weight-regular)',
    padding: '5px 12px',
    borderRadius: 'var(--radius-pill)',
    lineHeight: 1.2
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/EssayPost.jsx
try { (() => {
/* global React */
// EssayPost — a single essay, matching BlogPostLayout.
const {
  Tag
} = window.PerezziniDesignSystem_33c6f1;
function EssayPost({
  onBack
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '112px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "blog-back-link",
    "aria-label": "Back to Essays",
    onClick: e => {
      e.preventDefault();
      onBack && onBack();
    },
    style: {
      display: 'inline-block',
      fontSize: 'var(--text-button)',
      color: 'var(--navy)',
      textDecoration: 'none',
      marginBottom: 32
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("time", {
    style: {
      display: 'block',
      fontSize: 'var(--text-meta)',
      color: 'var(--text-secondary)',
      marginBottom: 4
    }
  }, "May 31, 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-title)',
      letterSpacing: 'var(--tracking-hero)',
      lineHeight: 'var(--leading-snug)',
      margin: '0 0 12px',
      textAlign: 'left'
    }
  }, "Hello, World"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Writing"), /*#__PURE__*/React.createElement(Tag, null, "Meta"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'left'
    }
  }, "Every portfolio needs a first post."), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'left'
    }
  }, "This is mine. I'll be writing about AI, data systems, software craft, and anything else I find worth sharing."), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: 'left'
    }
  }, "Stay tuned.")));
}
window.EssayPost = EssayPost;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/EssayPost.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Essays.jsx
try { (() => {
/* global React */
// Essays — the essay listing page.
const {
  BlogCard
} = window.PerezziniDesignSystem_33c6f1;
const ESSAYS = [{
  date: 'May 31, 2026',
  title: 'Hello, World',
  description: "The first post on this site — a brief note on why I'm starting to write.",
  slug: 'hello-world'
}];
function Essays({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '112px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("h2", null, "Essays"), ESSAYS.map(e => /*#__PURE__*/React.createElement(BlogCard, {
    key: e.slug,
    date: e.date,
    title: e.title,
    description: e.description,
    href: "#",
    onClick: ev => {
      ev.preventDefault();
      onOpen && onOpen(e.slug);
    }
  })));
}
window.Essays = Essays;
window.ESSAYS = ESSAYS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Essays.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* global React */
// Home — the portfolio landing column: hero, bio, education, work, CTAs, social.
const {
  Avatar,
  Button,
  SocialIcon
} = window.PerezziniDesignSystem_33c6f1;
function Home() {
  return /*#__PURE__*/React.createElement("main", {
    className: "home",
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '112px 24px 72px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../../assets/profile-1.jpeg",
    alt: "Luciano Perezzini",
    size: 112
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '20px 0 8px',
      fontSize: 'var(--text-hero)'
    }
  }, "Luciano Perezzini"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-subtitle)',
      color: 'var(--text-subtitle)',
      margin: 0
    }
  }, "Technologist")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", null, "Luciano builds data-driven products at the intersection of AI, information retrieval, and software engineering. He has led technical and product work at early-stage startups from zero to scale, with a focus on turning complex data into decision-ready systems. His background spans natural language processing, machine learning, and applied research \u2014 grounded in the belief that great engineering and great user experience are inseparable.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", null, "Licentiate in Computer Science from", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Universidad Nacional de Rosario"), " (2019). Thesis conducted at ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "CIFASIS-CONICET"), ":", ' ', /*#__PURE__*/React.createElement("em", null, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Towards Legal Engineering Decision Support Systems")), ' ', "\u2014 LegalTech recommender systems built on Information Retrieval and Natural Language Processing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "fa-solid fa-cloud-arrow-down",
    href: "#"
  }, "Thesis"))), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "secondary"
  }, "Since 2021, he has served as Chief Data Officer at", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "DeepAgro"), ", leading the Data and Cloud Computing division \u2014 driving the design, deployment, and scaling of machine learning systems and business intelligence platforms across the agri-tech sector.")), /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 8,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "fa-solid fa-cloud-arrow-down",
    href: "#"
  }, "Resume"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    icon: "fa-regular fa-envelope",
    href: "#"
  }, "Contact Me"))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(SocialIcon, {
    icon: "fa-brands fa-linkedin-in",
    href: "#",
    label: "LinkedIn"
  }), /*#__PURE__*/React.createElement(SocialIcon, {
    icon: "fa-brands fa-github",
    href: "#",
    label: "GitHub"
  }))));
}
window.Home = Home;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Publications.jsx
try { (() => {
/* global React */
// Publications — the academic publications list.
function Publications() {
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--content-max)',
      margin: '0 auto',
      padding: '112px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("h2", null, "Academic publications"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      fontSize: 'var(--text-button)',
      lineHeight: 'var(--leading-list)',
      color: 'var(--text-secondary)',
      paddingLeft: 20,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 4,
      color: 'var(--text-secondary)',
      fontSize: 20,
      lineHeight: 1.2
    }
  }, "\xB7"), "Perezzini, L., Casali, A., Deco, C.: Sistema de Soporte para la Recuperaci\xF3n de Normativas en la Ingenier\xEDa Legal. In: XLIX Simposio Argentino de Inform\xE1tica y Derecho (2020),", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "SID 2020"), " ", /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "[pdf]"), ' ', /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "[video]")))));
}
window.Publications = Publications;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Publications.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.NavPill = __ds_scope.NavPill;

__ds_ns.SocialIcon = __ds_scope.SocialIcon;

__ds_ns.Tag = __ds_scope.Tag;

})();
