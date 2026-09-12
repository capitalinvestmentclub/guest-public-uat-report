window.GUEST_PUBLIC_UAT = {
  summary: { scenarios: 20, cells: 120, pass: 3, fail: 9, blocked: 8 },
  scenarios: [
    ['PUB-001','FAIL','Public landing navigation'],
    ['PUB-002','FAIL','Public pitch discovery'],
    ['PUB-003','FAIL','Public pitch details and protected actions'],
    ['PUB-004','PASS','Public grants discovery and closed states'],
    ['PUB-005','FAIL','Public grant page and share link'],
    ['PUB-006','FAIL','Public organization and user privacy'],
    ['PUB-007','BLOCKED','Registration role selection and terms'],
    ['PUB-008','BLOCKED','Registration identity validation'],
    ['PUB-009','BLOCKED','Registration age, nationality and tax boundaries'],
    ['PUB-010','BLOCKED','Pitcher registration complete journey'],
    ['PUB-011','BLOCKED','Investor registration complete journey'],
    ['PUB-012','BLOCKED','Assessor registration complete journey'],
    ['PUB-013','FAIL','Signup draft save, resume and expiry'],
    ['PUB-014','BLOCKED','Verification link lifecycle'],
    ['PUB-015','PASS','Login destination and session isolation'],
    ['PUB-016','FAIL','Password recovery and security questions'],
    ['PUB-017','BLOCKED','Restricted location and signup eligibility'],
    ['PUB-018','PASS','Guest route authorization boundary'],
    ['PUB-019','FAIL','Anonymous public contribution checkout'],
    ['PUB-020','FAIL','Guest to verified applicant lifecycle'],
  ],
};

const reportBase = 'https://github.com/capitalinvestmentclub/webapp/tree/codex/pitcher-empty-eligibility-hydration-20260912/tests/e2e/guest-public';
const findings = [
  {id:'PUB001-RESP-001',type:'Defect',severity:'High',scenario:'PUB-001',area:'Responsive navigation',title:'Mobile public header omits essential navigation',description:'At 360×800 and 390×844 the landing header exposes only the logo and Sign up. There is no mobile menu, Sign in, Products or Resources control.',expected:'Every public destination and authentication entry should remain discoverable and keyboard accessible at supported mobile widths.',retest:'Verify a labelled menu opens, traps/restores focus correctly, closes with Escape and reaches all desktop-equivalent destinations.'},
  {id:'PUB002-SEARCH-001',type:'Defect',severity:'High',scenario:'PUB-002',area:'Pitch discovery',title:'Public pitch search ignores the submitted query',description:'Entering an exact published pitch title and submitting cleared the query and retained all 31 pitch cards instead of filtering to the match.',expected:'Exact, partial and no-match queries should deterministically filter the public pitch catalog and recover after clear.',retest:'Exercise exact, partial, Unicode and no-match queries on every Chrome size and confirm stable counts after refresh.'},
  {id:'PUB003-AUTH-001',type:'Defect',severity:'High',scenario:'PUB-003',area:'Public pitch detail',title:'Published pitch details are entirely authentication-gated',description:'View Pitch from the signed-out catalog opens “Sign in to view this pitch,” so no public pitch narrative or public material can be inspected.',expected:'Published public fields should render while private/contact/investment actions remain gated.',retest:'Open a published, draft, removed and unknown pitch URL signed out; verify field-level privacy and destination-preserving login.'},
  {id:'PUB005-RENDER-001',type:'Defect',severity:'Critical',scenario:'PUB-005',area:'Public grant detail',title:'Public grant route renders a blank body',description:'Selecting an openly funded grant opens its public URL, but only site chrome/footer renders. Grant title, funding, eligibility, rich content and actions are absent at all six Chrome sizes.',expected:'A published grant URL should render a complete privacy-safe public page with controlled recovery for invalid or unpublished records.',retest:'Open known open, closed, unpublished and malformed grant URLs at six sizes and verify body content plus reload consistency.'},
  {id:'PUB006-PROFILE-001',type:'Defect',severity:'Medium',scenario:'PUB-006',area:'Public profiles',title:'Public creator links redirect guests to Login',description:'The public grant catalog exposes creator links, but following a creator link signed out redirects to Login instead of a privacy-safe public profile.',expected:'Links presented as public creator/profile navigation should render approved public fields without exposing private account data.',retest:'Open public/private organization and user fixtures signed out, then verify field-level visibility and gated contact behavior.'},
  {id:'PUB007-COVERAGE-001',type:'Gap',severity:'High',scenario:'PUB-007–014',area:'Registration lifecycle',title:'Role, biodata and verification branches remain behind account creation',description:'Identity validation and six-size entry coverage completed, but role-specific forms, biodata limits, three complete role signups and verification-token lifecycle require final creation of disposable accounts.',expected:'Fresh run-scoped accounts should be created through the UI and joined to mailbox verification, role onboarding and KYC gates.',retest:'Create three disposable plus-address accounts through the live UI, complete every mapped boundary and preserve correlation evidence.'},
  {id:'PUB013-DRAFT-001',type:'Defect',severity:'Medium',scenario:'PUB-013',area:'Signup draft',title:'Auto-restored signup drafts have no Resume or Discard controls',description:'Identity values restore after navigating away and Back with a 24-hour banner, but no rendered Resume or Discard decision is available.',expected:'Users should explicitly resume or discard saved signup data, with expiry and cross-profile privacy behavior visible.',retest:'Save a multi-step draft, reopen in same and isolated profiles, discard, expire and verify personal data removal.'},
  {id:'PUB016-TOKEN-001',type:'Defect',severity:'Critical',scenario:'PUB-016',area:'Password recovery',title:'Recovery can return an already-consumed token',description:'Qualifying same-deployment evidence from the Organization new-user recovery journey showed the emailed recovery chain resolving to an invalid already-consumed token.',expected:'Each recovery stage should issue a fresh single-use token and allow a compliant password reset exactly once.',retest:'Request recovery for a fresh disposable user, test wrong answers and password rules, reset, reject the old password and replay/expire links.'},
  {id:'PUB017-COVERAGE-001',type:'Gap',severity:'Medium',scenario:'PUB-017',area:'Location eligibility',title:'Allowed/restricted account pair was not available',description:'The direct REGION_NOT_SUPPORTED page and recovery links render, but the required allowed→restricted→corrected signup transitions need configured disposable identities.',expected:'Test configuration should expose documented allowed and restricted locations/nationalities for deterministic boundary execution.',retest:'Create run-scoped allowed and restricted users, change final selections, and verify both signup and protected-action policy enforcement.'},
  {id:'PUB019-ENTRY-001',type:'Defect',severity:'Critical',scenario:'PUB-019',area:'Public contribution',title:'Anonymous contribution has no rendered entry point',description:'Open grant cards advertise public contributions, but the blank public grant body contains no Contribute control, preventing amount, provider, callback and receipt testing.',expected:'Eligible guests should reach a validated sandbox contribution checkout; failed/cancelled attempts must not credit and callback replay must be idempotent.',retest:'Restore the public grant detail, then execute blank/zero/negative/valid amount, success, decline, cancel and repeated-callback branches.'},
  {id:'PUB020-ENTRY-001',type:'Defect',severity:'Critical',scenario:'PUB-020',area:'Guest application',title:'Guest-to-applicant lifecycle cannot start',description:'The selected public grant detail is blank and exposes no Apply action, so destination-preserving signup, verification, KYC, application and query/reply cannot be joined.',expected:'Guest Apply should preserve the grant through onboarding and produce one auditable application with correct two-actor communications.',retest:'Start from a public grant, cancel/resume login, complete signup/verification/KYC, submit once and complete the grantor query/applicant reply loop.'},
];

window.PR_REVIEW_DATA = {
  meta: {
    generatedAt: '2026-09-12T13:45:00Z',
    commit: 'ed1f5aec',
    url: 'https://github.com/capitalinvestmentclub/guest-public-uat-report',
    source: 'Guest/Public Chrome × six-size UAT run records in capitalinvestmentclub/webapp',
  },
  findings: findings.map((finding) => ({
    ...finding,
    status: 'Open',
    source: `tests/e2e/guest-public/${finding.scenario}`,
    line: 1,
    sourceUrl: reportBase,
    evidenceRun: `2026-09-12 ${finding.scenario} Chrome six-size run`,
    evidenceRunUrl: reportBase,
    evidenceUrl: reportBase + '/evidence/2026-09-12-chrome-6view',
    mediaEvidenceCount: 6,
  })),
};
