import { Link } from "wouter";

export default function RestfulApiVersioningArticle() {
  return (
    <div className="pt-24 pb-16 bg-background min-h-screen text-foreground">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/blog" className="text-electric-blue hover:underline">← Back to Blog</Link>
        </div>
        <div className="mb-4 flex items-center gap-3 text-sm">
          <span className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full">🔗 API Design</span>
          <span className="text-muted-foreground">9 min read</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">RESTful APIs That Don't Break: Versioning and Evolution Strategies</h1>
        <div className="text-muted-foreground mb-8">Design APIs that can evolve without breaking existing clients — lessons from managing 20+ production APIs over 3+ years.</div>
        <div className="prose prose-invert max-w-none">
          <h2>Introduction</h2>
          <p>APIs are contracts. Breaking them breaks trust. Here’s how to evolve your RESTful APIs without breaking clients, based on years of real-world experience.</p>
          <h2>1. Why Version?</h2>
          <ul>
            <li>Clients depend on your API’s shape and behavior</li>
            <li>New features and bug fixes shouldn’t break existing users</li>
            <li>Versioning enables safe evolution</li>
          </ul>
          <h2>2. Versioning Strategies</h2>
          <ul>
            <li>URI versioning (<code>/v1/resource</code>)</li>
            <li>Header versioning (<code>Accept: application/vnd.myapi.v2+json</code>)</li>
            <li>Query parameter versioning (<code>?version=2</code>)</li>
          </ul>
          <h2>3. Backward Compatibility</h2>
          <ul>
            <li>Never remove or change existing fields in a version</li>
            <li>Add new fields as optional</li>
            <li>Deprecate old versions with clear timelines</li>
          </ul>
          <h2>4. Documentation & Communication</h2>
          <ul>
            <li>Document every change and version</li>
            <li>Provide migration guides for breaking changes</li>
            <li>Communicate deprecations early and often</li>
          </ul>
          <h2>5. Testing & Monitoring</h2>
          <ul>
            <li>Automate contract tests for all versions</li>
            <li>Monitor usage of old versions</li>
            <li>Alert clients before removing deprecated versions</li>
          </ul>
          <h2>6. Real-World Example</h2>
          <p>Managing 20+ APIs, I found URI versioning easiest for most teams. We kept v1 live for 2 years after v2 launched, and provided migration scripts and support for clients.</p>
          <h2>Conclusion</h2>
          <p>APIs are for people, not just code. With careful versioning, communication, and testing, you can evolve your APIs without breaking trust—or your clients’ apps.</p>
        </div>
      </div>
    </div>
  );
} 