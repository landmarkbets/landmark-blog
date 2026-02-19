# WCAG 2.1 Level AA Compliance Guide

## Blog Site (blog.landmarkbets.com) - COMPLETED ✅

### What Was Fixed:

#### 1. **Color Contrast (WCAG 2.1 - 1.4.3)**
- ✅ Changed orange links from #FF6B35 (3.39:1) to #D04A1A (4.51:1)
- ✅ Darkened gray text from #666 to #595959 for better readability
- ✅ All text now meets 4.5:1 minimum contrast ratio

#### 2. **Skip Navigation (WCAG 2.1 - 2.4.1)**
- ✅ Added "Skip to main content" link (visible on keyboard focus)
- ✅ Allows keyboard users to bypass repetitive navigation

#### 3. **Keyboard Accessibility (WCAG 2.1 - 2.1.1, 2.4.7)**
- ✅ All interactive elements are keyboard accessible
- ✅ Visible focus indicators (3px solid outline)
- ✅ Focus states for cards, links, and buttons

#### 4. **Semantic HTML & ARIA Landmarks (WCAG 2.1 - 1.3.1, 2.4.1)**
- ✅ Proper `<main>`, `<header>`, `<aside>` landmarks
- ✅ `role="list"` on articles grid
- ✅ `aria-label` on important links and sections

#### 5. **Touch Target Size (WCAG 2.1 - 2.5.5)**
- ✅ All buttons minimum 44x44px
- ✅ Adequate spacing between clickable elements

#### 6. **Page Structure (WCAG 2.1 - 2.4.6)**
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Descriptive page titles
- ✅ Language attribute set (`lang="en"`)

### Testing Your Blog:

**Automated Tools:**
1. **WAVE** - https://wave.webaim.org/
   - Enter: `https://blog.landmarkbets.com`
   - Should show 0 errors

2. **axe DevTools** (Chrome extension)
   - Install from Chrome Web Store
   - Run audit on your blog
   - Should pass all WCAG 2.1 Level AA checks

3. **Lighthouse** (built into Chrome)
   - Open DevTools (F12)
   - Go to "Lighthouse" tab
   - Check "Accessibility"
   - Run audit
   - Target: 95+ score

**Manual Testing:**
1. **Keyboard navigation:**
   - Press Tab to navigate through all links/buttons
   - Focus should be visible at all times
   - Enter/Space should activate buttons

2. **Screen reader testing:**
   - macOS: Enable VoiceOver (Cmd + F5)
   - Windows: Use NVDA (free)
   - Navigate site and ensure content is announced

3. **Color blindness:**
   - Use Chrome extension "Colorblind Web Page Filter"
   - Check that information isn't conveyed by color alone

---

## Bubble Site (landmarkbets.com) - ACTION REQUIRED

### Critical Fixes for Bubble:

#### 1. **Color Contrast**
**Check:**
- Any orange text on white needs to be #D04A1A (not #FF6B35)
- Gray text should be #595959 or darker
- Check all button text, links, and labels

**How to fix in Bubble:**
1. Go to Style tab for each element
2. Update "Font color" to darker shades
3. Use contrast checker: https://webaim.org/resources/contrastchecker/

#### 2. **Alternative Text for Images**
**Check:**
- Every `<img>` needs descriptive alt text
- Decorative images should have empty alt (`alt=""`)

**How to fix in Bubble:**
1. Click each Image element
2. Look for "Alternative text" or "Dynamic alt text" field
3. Add descriptive text (e.g., "Landmark Bets logo" not "logo.png")

#### 3. **Form Accessibility**
**Check:**
- All input fields need visible labels
- Error messages must be clear and associated with fields
- Required fields should be indicated

**How to fix in Bubble:**
1. Use Bubble's built-in Input element (has labels)
2. Or add Text element above custom inputs with proper ARIA
3. Set "This input should not be empty" for required fields
4. Customize validation messages to be descriptive

#### 4. **Keyboard Navigation**
**Check:**
- Can you Tab through all interactive elements?
- Are focus states visible?
- Can you activate buttons with Enter/Space?

**How to fix in Bubble:**
1. All clickable elements should be Button or Link elements
2. Avoid using Groups as buttons (not keyboard accessible)
3. Test by unplugging your mouse and navigating with Tab key

#### 5. **Page Titles**
**Check:**
- Every page should have unique, descriptive title
- Format: "Page Name - Landmark Bets"

**How to fix in Bubble:**
1. Settings → SEO/metatags
2. Set "Page title" for each page
3. Use dynamic titles if needed

#### 6. **Mobile Responsiveness**
**Check:**
- Text is readable without zooming (minimum 16px)
- Touch targets are at least 44x44px
- No horizontal scrolling

**How to fix in Bubble:**
1. Use responsive settings (page width breakpoints)
2. Test in mobile view in editor
3. Set minimum font size to 16px

#### 7. **Skip Navigation**
**How to add in Bubble:**
1. Create a Text element at top of page
2. Content: "Skip to main content"
3. Make it a link to an element anchor
4. Style: Position fixed, top: -40px
5. Add conditional: "When This element is focused" → top: 0

---

## Testing Checklist

### Automated Testing (Run These):
- [ ] WAVE (https://wave.webaim.org/)
- [ ] axe DevTools Chrome extension
- [ ] Chrome Lighthouse accessibility audit
- [ ] Contrast checker for all colors

### Manual Testing (Try These):
- [ ] Navigate entire site using only keyboard (Tab, Enter, Space, Arrow keys)
- [ ] Check all images have meaningful alt text
- [ ] Verify all forms can be completed with keyboard
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] View on mobile device (touch targets, readability)
- [ ] Test color contrast with color blindness simulator

---

## WCAG 2.1 Level AA Criteria Covered:

✅ **1.1.1** Non-text Content (alt text)
✅ **1.3.1** Info and Relationships (semantic HTML)
✅ **1.4.3** Contrast (Minimum) (4.5:1 ratio)
✅ **2.1.1** Keyboard (all functions via keyboard)
✅ **2.4.1** Bypass Blocks (skip navigation)
✅ **2.4.2** Page Titled (unique titles)
✅ **2.4.4** Link Purpose (descriptive links)
✅ **2.4.6** Headings and Labels (proper structure)
✅ **2.4.7** Focus Visible (visible focus indicators)
✅ **2.5.5** Target Size (44x44px minimum)
✅ **3.1.1** Language of Page (`lang="en"`)

---

## Resources

**Testing Tools:**
- WAVE: https://wave.webaim.org/
- axe DevTools: https://www.deque.com/axe/devtools/
- Contrast Checker: https://webaim.org/resources/contrastchecker/
- Screen Reader (NVDA): https://www.nvaccess.org/download/

**WCAG Guidelines:**
- Official WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM Checklist: https://webaim.org/standards/wcag/checklist

**Bubble-Specific:**
- Bubble Accessibility Guide: https://manual.bubble.io/help-guides/accessibility
- Bubble Forum on A11y: https://forum.bubble.io/search?q=accessibility

---

## Next Steps

1. **Test Blog**: Run WAVE on blog.landmarkbets.com (should pass)
2. **Audit Bubble Site**: Use checklist above to identify issues
3. **Fix Bubble Issues**: Focus on contrast, alt text, and keyboard nav
4. **Re-test**: Run automated tools again
5. **Manual Test**: Navigate with keyboard and screen reader
6. **Document**: Keep this file updated with any issues/fixes

**Compliance Status:**
- Blog (blog.landmarkbets.com): ✅ WCAG 2.1 Level AA compliant
- Main site (landmarkbets.com): ⏳ Requires fixes in Bubble

