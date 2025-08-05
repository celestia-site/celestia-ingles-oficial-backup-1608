import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

const RegistrosAkashicos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Akashic Records: Portal to Past Lives
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Understand how to access your soul's memories and heal ancestral traumas through cosmic records
            </p>
            <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span>By Celestia</span>
              <span>•</span>
              <span>15 min read</span>
              <span>•</span>
              <span>Spirituality</span>
            </div>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">✨ What are Akashic Records?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Imagine an invisible library that contains all the experiences of your soul — not just from this life, but from all incarnations. This is the concept of Akashic Records: a subtle field where the spiritual history of each being is recorded.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                The term comes from the Sanskrit Akasha, which means "ether" or "primordial substance." According to esoteric traditions, this vibrational plane stores information about:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Who you were in past lives</li>
                <li>Which spiritual patterns still repeat</li>
                <li>Your forgotten gifts</li>
                <li>Unresolved lessons</li>
                <li>The mission your soul chose</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧭 Why access the Akashic Records?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Accessing the Akashic Records is not just spiritual curiosity. It's a powerful tool for healing, liberation and realignment with your soul mission.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                By understanding your past experiences, you:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Release ancestral traumas</li>
                <li>Break repetitive cycles of suffering</li>
                <li>Recognize forgotten gifts and talents</li>
                <li>Better understand current challenges</li>
                <li>Reconnect with important people from previous journeys</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🔑 How do the Records influence your life today?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The emotional patterns, fears and challenges you experience may have roots in other lives. For example:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                <li><strong>Fear of public speaking</strong> → may come from an incarnation where you were punished for expressing yourself</li>
                <li><strong>Difficulty with prosperity</strong> → may reflect past vows of poverty</li>
                <li><strong>Toxic relationships</strong> → may be reconnections with unresolved karmic bonds</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                These records vibrate in your current energy field until they are recognized and transmuted.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🌀 How to access the Akashic Records?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                There are several ways, and none require special mediumship. Just intention, respect and proper training.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                <strong>Common methods:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground mb-4">
                <li>Guided meditation specific to Akasha</li>
                <li>Intuitive reading with an akashic therapist</li>
                <li>Oracles connected to the spiritual field</li>
                <li>Visualizations with mantras and opening symbols</li>
                <li>Automatic writing techniques with protection</li>
              </ul>
              <p className="text-foreground leading-relaxed">
                The reading can be done by yourself or with the help of someone trained. In Celestia's case, we use a combination of archetypal tarot, astrology, numerology and intuitive channeling.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧬 What can be revealed?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                By accessing your records, you can discover:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Approximate dates of past incarnations</li>
                <li>Recurring geographical locations (e.g. Egypt, India, medieval Europe)</li>
                <li>Roles you played (priest, warrior, mother, healer...)</li>
                <li>Karmic patterns with partners, family or colleagues</li>
                <li>Promises made that are still active</li>
                <li>Learning cycles not yet completed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🔮 What is an Akashic Reading with Celestia?</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Our approach combines:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li><strong>Numerology:</strong> revealing birth patterns</li>
                <li><strong>Karmic astrology:</strong> lunar nodes, spiritual houses</li>
                <li><strong>Therapeutic tarot:</strong> archetypes in motion</li>
                <li><strong>Channeling messages</strong> from the Higher Self</li>
                <li><strong>Timeline</strong> with at least 4 past lives</li>
                <li><strong>Suggested ritual</strong> for spiritual reconnection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">⚖️ Cleansing and Reconnection</h2>
              <p className="text-foreground leading-relaxed mb-4">
                Just accessing the record is not enough — you need to purify and rebalance the affected energy fields.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                You will receive suggestions for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>Specific crystals</li>
                <li>Ancestral cleansing baths</li>
                <li>Activations with mantras and mudras</li>
                <li>Meditations to cut karmic bonds</li>
                <li>Spiritual journal to record insights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🛑 Important Warnings</h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground">
                <li>We don't seek "fame" from past lives, but patterns</li>
                <li>The focus is always healing and learning, not fortune telling</li>
                <li>Access must be done with ethics and love</li>
                <li>Not all lives are revealed at once</li>
                <li>You only access what you are ready to heal</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🧘 Quick Practice: Meditation to Access the Akashic Field</h2>
              <ol className="list-decimal pl-6 space-y-2 text-foreground">
                <li>Find a quiet place</li>
                <li>Take 3 deep breaths</li>
                <li>Visualize a golden light library</li>
                <li>Mentally say: "I ask for loving access to my records, to heal and evolve"</li>
                <li>Let images, words or sensations arise</li>
                <li>Write everything in your spiritual journal</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold text-primary mb-4">🙌 Conclusion</h2>
              <p className="text-foreground leading-relaxed mb-4">
                The Akashic Records are your soul's secret book. With each page accessed with wisdom, you free yourself, recognize yourself, heal yourself.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                It's not about "going back to the past," but bringing light to the present. And the more you heal, the closer you get to your true mission.
              </p>
            </section>

          </article>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Discover Your Past Lives
            </h3>
            <p className="text-foreground mb-6">
              Schedule a personalized consultation and access your Akashic Records with safety and professional guidance.
            </p>
            <Link 
              to="/"
              className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegistrosAkashicos;