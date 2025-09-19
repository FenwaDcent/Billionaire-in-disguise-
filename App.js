import React, { useState } from "react";

function App() {
  const [currentChapter, setCurrentChapter] = useState(0);

  const chapters = [
    {
      title: "Chapter 1: The Arrival",
      content: `The sun beat down on the dusty roads of Ìsẹ̀lú, a quiet village nestled in the heart of Ekiti State. Goats wandered freely, children played with bottle caps, and elders sat under the shade of mango trees, sipping palm wine and discussing village matters.

                    Then, he arrived.

                    A man on a rusty bicycle, dressed in a faded blue shirt and worn-out slippers, pedaled slowly through the square. His face was calm, his eyes sharp, and his presence quiet.

                    Villager 1 (whispering):
                    “Who is this man? He looks poor.”

                    Villager 2:
                    “Maybe he’s lost. Or running from something.”

                    The man ignored them. He stopped at the edge of the market, dismounted, and bowed respectfully to the elders.

                    Fenwa (softly):
                    “Good afternoon, fathers. My name is Fenwa. I’ve come to live among you. I mean no harm.”

                    The elders exchanged glances. Suspicion hung in the air.

                    But little did they know — this quiet man on a bicycle was not who he seemed. He was Fenwa Ajibade, Nigeria’s most mysterious billionaire, and he had come with a mission: to find a woman who would love him for who he was… not for his wealth.`,
    },
    {
      title: "Chapter 2: The First Glimpse",
      content: `That evening, as the sun dipped below the hills, Fenwa sat alone on a wooden bench outside the guesthouse. The air was thick with the scent of roasted corn and wood smoke.

                                        Then, she appeared.

                                        Ṣadé walked through the compound, her iro and buba flowing with each step. She carried a calabash of water on her head, her posture regal, her beauty undeniable.

                                        Their eyes met.

                                        For a moment, time stood still.

                                        Ṣadé (to her friend):
                                        “Who is that man? He looks… different.”

                                        Friend:
                                        “Him? Just another poor fellow looking for work. Don’t waste your time.”

                                        But Ṣadé didn’t look away. There was something in his eyes — a depth, a quiet strength.

                                        Fenwa smiled faintly, then looked down.

                                        He had seen her. And in that moment, he knew — this was the woman he had been searching for.

                                        But would she ever see him… for who he truly was?`,
    },
    {
      title: "Chapter 3: The First Test",
      content: `The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

                                                            Fenwa was the first to act.

                                                            Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

                                                            Villager (amazed):
                                                            “Look at him! He’s working like a slave, and he’s not even from here.”

                                                            Ṣadé watched from under a dry awning, her heart stirred.

                                                            Ṣadé (to herself):
                                                            “Most men would have run. But he stayed. He helped.”

                                                            Later, as the rain slowed, she walked up to him.

                                                            Ṣadé:
                                                            “Thank you. You didn’t have to do all this.”

                                                            Fenwa (wiping mud from his face):
                                                            “If I see a problem, I fix it. That’s who I am.”

                                                            She smiled — the first real smile she’d given anyone in weeks.

                                                            And Fenwa felt it: the first spark of something greater than wealth… greater than power.

                                                            Hope.`,
    },
    {
      title: "Chapter 4: The Gossip Begins",
      content: `By the third day, the entire village was talking about the strange man who rode a bicycle and helped without asking for pay.

                                                                                Market Woman 1 (whispering):
                                                                                “He doesn’t even have a phone. How poor can a man be?”

                                                                                Market Woman 2:
                                                                                “Maybe he’s a madman. Or a runaway criminal.”

                                                                                But not everyone was unkind.

                                                                                Old Man:
                                                                                “I like him. He respects the elders. He works hard. That’s more than I can say for some of our youth.”

                                                                                Meanwhile, Ṣadé found herself thinking about Fenwa more than she wanted to admit. She saw him fetching water for Mama Ranti, the oldest woman in the village. She saw him repairing a broken fence for a widow.

                                                                                One afternoon, her friend teased her.

                                                                                Friend:
                                                                                “Ah! I see the way you look at him. Do you like the poor man?”

                                                                                Ṣadé (blushing):
                                                                                “Don’t be foolish. I’m just… noticing his kindness.”

                                                                                But deep down, she knew — kindness like that was rare.

                                                                                And rare things are worth protecting.`,
    },
    {
      title: "Chapter 5: The First Kindness",
      content: `Mama Ranti fell ill. The village herbalist said she needed a special herb only found deep in the forest — and it had to be collected at dawn, before the sun rose.

                                                                                                    No one volunteered. The forest was dangerous at night.

                                                                                                    But Fenwa did.

                                                                                                    He left at 4 a.m., machete in hand, flashlight flickering. He returned two hours later, drenched in sweat, his clothes torn, but holding the precious herb in a small cloth.

                                                                                                    He handed it to the herbalist without a word.

                                                                                                    Later that day, Ṣadé visited Mama Ranti.

                                                                                                    Ṣadé:
                                                                                                    “Who brought the herb?”

                                                                                                    Mama Ranti (weakly):
                                                                                                    “That quiet man… Fenwa. He risked his life for an old woman.”

                                                                                                    Ṣadé’s heart swelled. That evening, she walked to the guesthouse with a bowl of hot soup.

                                                                                                    Ṣadé:
                                                                                                    “I heard you didn’t eat today. I brought this… for you.”

                                                                                                    Fenwa looked up, surprised.

                                                                                                    Fenwa:
                                                                                                    “You didn’t have to.”

                                                                                                    Ṣadé:
                                                                                                    “Yes, I did. You helped Mama Ranti. This is the least I could do.”

                                                                                                    For the first time, Fenwa felt something he hadn’t in years.

                                                                                                    Not admiration.

                                                                                                    Not respect.

                                                                                                    But connection.

                                                                                                    And in that quiet moment, love began to grow — not in grand gestures, but in small acts of kindness.`,
    },
    {
      title: "Chapter 6: The Village Festival",
      content: `The annual Ìsẹ̀lú Festival was approaching — a week of dancing, drumming, and celebration. Every family prepared food, children practiced masquerade dances, and the air buzzed with excitement.

                                                                                                                        Fenwa was invited to help set up the stage. He worked from sunrise to sunset, hammering wood, stringing lights, and lifting heavy speakers.

                                                                                                                        Other young men stood around, chatting and laughing.

                                                                                                                        Young Man:
                                                                                                                        “Why are you working so hard? You’re not even from here.”

                                                                                                                        Fenwa (wiping sweat):
                                                                                                                        “Because it’s needed. And I’m able.”

                                                                                                                        That night, during the opening ceremony, the Oba stood to speak.

                                                                                                                        Oba:
                                                                                                                        “Tonight, we celebrate unity, tradition, and progress. And I want to honor someone who, though new, has already become part of us.”

                                                                                                                        All eyes turned to Fenwa.

                                                                                                                        Oba:
                                                                                                                        “Fenwa, come forward.”

                                                                                                                        Fenwa hesitated, then walked up.

                                                                                                                        Oba:
                                                                                                                        “This man has shown humility, strength, and service. He is a true son of Ìsẹ̀lú.”

                                                                                                                        The crowd erupted in applause.

                                                                                                                        Ṣadé watched, her chest tight with emotion.

                                                                                                                        For the first time, she felt proud — not of herself, but of him.

                                                                                                                        And when their eyes met across the firelit square, something unspoken passed between them.

                                                                                                                        A promise.

                                                                                                                        A beginning.`,
    },
    {
      title: "Chapter 7: The First Doubt",
      content: `Not everyone celebrated Fenwa’s recognition.

                                                                                                                                            At the back of the crowd, Kunle — Ṣadé’s cousin — watched with narrowed eyes. He had always wanted Ṣadé for himself, but she had rejected him time and again.

                                                                                                                                            Now, this stranger was winning her silent admiration.

                                                                                                                                            Kunle (muttering to his friend):
                                                                                                                                            “Who does he think he is? A bicycle boy becoming a village hero?”

                                                                                                                                            Friend:
                                                                                                                                            “Let him enjoy it. No one stays humble when they get power.”

                                                                                                                                            Kunle smirked.

                                                                                                                                            Later, he approached Ṣadé.

                                                                                                                                            Kunle:
                                                                                                                                            “You’re watching him again. Don’t be fooled by his act. He’s just trying to impress you.”

                                                                                                                                            Ṣadé (coldly):
                                                                                                                                            “He doesn’t need to impress me. He’s already proven who he is.”

                                                                                                                                            Kunle’s face darkened.

                                                                                                                                            Kunle:
                                                                                                                                            “One day, everyone will see the truth. And when they do, he’ll be gone.”

                                                                                                                                            But Ṣadé didn’t flinch.

                                                                                                                                            Her heart had already made a choice.

                                                                                                                                            Even if her mind still doubted.`,
    },
    {
      title: "Chapter 8: The Rainy Night",
      content: `A violent storm hit Ìsẹ̀lú in the middle of the night. Thunder cracked, trees swayed, and the river began to rise.

                                                                                                                                                                Fenwa woke to the sound of shouting. A child’s voice screamed from across the compound.

                                                                                                                                                                Child:
                                                                                                                                                                “Help! The roof is collapsing!”

                                                                                                                                                                Without thinking, Fenwa grabbed a tarp and ran through the pouring rain. The roof of a small hut — where a mother and her two children lived — was caving in.

                                                                                                                                                                He climbed onto the soaked roof, nails tearing his hands, wind nearly throwing him off. He secured the tarp with ropes and heavy stones.

                                                                                                                                                                Then, he carried the family to the guesthouse, one by one.

                                                                                                                                                                By morning, the storm had passed.

                                                                                                                                                                The mother knelt before him, weeping.

                                                                                                                                                                Mother:
                                                                                                                                                                “You saved my children. I will never forget this.”

                                                                                                                                                                Fenwa helped her up.

                                                                                                                                                                Fenwa:
                                                                                                                                                                “I was just in the right place at the right time.”

                                                                                                                                                                But word spread fast.

                                                                                                                                                                Villager:
                                                                                                                                                                “He risked his life for strangers.”

                                                                                                                                                                Another:
                                                                                                                                                                “Even our own men didn’t move. But he did.”

                                                                                                                                                                Ṣadé heard the stories. That night, she stood at her window, watching Fenwa sit alone under a tree, staring at the stars.

                                                                                                                                                                She whispered:
                                                                                                                                                                “You’re not just kind.
                                                                                                                                                                You’re extraordinary.
                                                                                                                                                                And I’m falling for you.”`,
    },
    {
      title: "Chapter 9: The First Gift",
      content: `Fenwa noticed Ṣadé’s sewing machine was broken. It was her only source of income — she made clothes for the village women.

                                                                                                                                                                                    The next day, he disappeared for hours.

                                                                                                                                                                                    When he returned, he carried a brand-new electric sewing machine — sleek, modern, and wrapped in cloth.

                                                                                                                                                                                    He placed it at her doorstep with a note:

                                                                                                                                                                                    “To the woman who makes beauty from cloth. May your hands never tire. — F.”

                                                                                                                                                                                    Ṣadé opened the package, stunned.

                                                                                                                                                                                    “How did he afford this? He has nothing!”

                                                                                                                                                                                    She ran to find him.

                                                                                                                                                                                    Ṣadé:
                                                                                                                                                                                    “This machine… it must have cost a fortune! How?”

                                                                                                                                                                                    Fenwa:
                                                                                                                                                                                    “I saved. For something important.”

                                                                                                                                                                                    Ṣadé:
                                                                                                                                                                                    “But why me?”

                                                                                                                                                                                    Fenwa (softly):
                                                                                                                                                                                    “Because you work hard. And hard work deserves support.”

                                                                                                                                                                                    Tears filled her eyes.

                                                                                                                                                                                    No man had ever given her a gift without expecting something in return.

                                                                                                                                                                                    But Fenwa? He gave — and asked for nothing.

                                                                                                                                                                                    That night, she prayed:

                                                                                                                                                                                    “Olúwa, if this man is truly good, let my heart be open to him.”`,
    },
    {
      title: "Chapter 10: The First Touch",
      content: `During the harvest festival, villagers played traditional games. One challenge was the rope tug-of-war.

                                                                                                                                                                                                        Ṣadé’s team was losing. The opposing side pulled hard, and she stumbled, falling into the mud.

                                                                                                                                                                                                        Before she could rise, a hand reached down.

                                                                                                                                                                                                        It was Fenwa.

                                                                                                                                                                                                        He pulled her up gently, his fingers warm against hers.

                                                                                                                                                                                                        For a brief second, they held hands.

                                                                                                                                                                                                        Time stopped.

                                                                                                                                                                                                        Ṣadé’s breath caught. Her heart pounded.

                                                                                                                                                                                                        Fenwa (softly):
                                                                                                                                                                                                        “Are you okay?”

                                                                                                                                                                                                        Ṣadé (nervously):
                                                                                                                                                                                                        “Yes… thank you.”

                                                                                                                                                                                                        They let go, but neither could forget the touch.

                                                                                                                                                                                                        That evening, as the drums played and dancers twisted in the firelight, they found themselves standing side by side.

                                                                                                                                                                                                        Ṣadé:
                                                                                                                                                                                                        “Why do you help everyone?”

                                                                                                                                                                                                        Fenwa:
                                                                                                                                                                                                        “Because one day, someone helped me when I had nothing. I never forgot that.”

                                                                                                                                                                                                        Ṣadé looked into his eyes.

                                                                                                                                                                                                        And for the first time, she saw not just a man.

                                                                                                                                                                                                        But a soul.

                                                                                                                                                                                                        Pure.

                                                                                                                                                                                                        True.

                                                                                                                                                                                                        And hers.`,
    },
    {
      title: "Chapter 11: The First Jealousy",
      content: `Kunle saw everything — the gift, the touch, the way Ṣadé looked at Fenwa.

                                                                                                                                                                                                                            His jealousy burned like fire.

                                                                                                                                                                                                                            At the palm wine joint, he drank heavily, muttering to his friends.

                                                                                                                                                                                                                            Kunle:
                                                                                                                                                                                                                            “That man is a fraud. He’s pretending to be poor so Ṣadé will pity him.”

                                                                                                                                                                                                                            Friend:
                                                                                                                                                                                                                            “Maybe he’s just a good man.”

                                                                                                                                                                                                                            Kunle (slamming his cup):
                                                                                                                                                                                                                            “There’s no such thing! Every man wants something. And when he gets it, he’ll leave her.”

                                                                                                                                                                                                                            That night, he spread rumors.

                                                                                                                                                                                                                            Kunle (whispering):
                                                                                                                                                                                                                            “I heard he’s running from the law. That’s why he’s hiding here.”

                                                                                                                                                                                                                            The gossip spread.

                                                                                                                                                                                                                            But Ṣadé refused to believe it.

                                                                                                                                                                                                                            When a woman confronted her:

                                                                                                                                                                                                                            Woman:
                                                                                                                                                                                                                            “Don’t you know he’s dangerous?”

                                                                                                                                                                                                                            Ṣadé (firmly):
                                                                                                                                                                                                                            “I know his heart. And his heart is clean.”

                                                                                                                                                                                                                            Fenwa heard the rumors. He said nothing.

                                                                                                                                                                                                                            But that night, he prayed:

                                                                                                                                                                                                                            “Olúwa, protect us from lies. Let truth rise.”

                                                                                                                                                                                                                            And in the silence, he felt peace.

                                                                                                                                                                                                                            Because he knew — no lie could erase what love had already built.`,
    },
    {
      title: "Chapter 12: The First Challenge",
      content: `A wealthy businessman from Lagos visited Ìsẹ̀lú, scouting for land to build a resort. He offered huge sums to villagers who would sell.

                                                                                                                                                                                                                                                Many agreed.

                                                                                                                                                                                                                                                But the land included the village well, the sacred grove, and the school compound.

                                                                                                                                                                                                                                                Fenwa stood before the Oba and elders.

                                                                                                                                                                                                                                                Fenwa:
                                                                                                                                                                                                                                                “This land is not for sale. It belongs to our ancestors, our children, our future.”

                                                                                                                                                                                                                                                Villager:
                                                                                                                                                                                                                                                “But the money! We could buy cars, travel abroad!”

                                                                                                                                                                                                                                                Fenwa:
                                                                                                                                                                                                                                                “And lose our identity? Money comes and goes. But heritage? It lasts forever.”

                                                                                                                                                                                                                                                He organized a meeting, taught the villagers about sustainable farming, and proposed building an eco-tourism center — owned by the community.

                                                                                                                                                                                                                                                Ṣadé stood beside him.

                                                                                                                                                                                                                                                Ṣadé:
                                                                                                                                                                                                                                                “He’s right. We don’t need to sell our soul for wealth.”

                                                                                                                                                                                                                                                Together, they convinced the village to reject the offer.

                                                                                                                                                                                                                                                The businessman left in anger.

                                                                                                                                                                                                                                                But Fenwa smiled.

                                                                                                                                                                                                                                                For the first time, he wasn’t just a helper.

                                                                                                                                                                                                                                                He was a leader.

                                                                                                                                                                                                                                                And Ṣadé? She was no longer just watching.

                                                                                                                                                                                                                                                She was standing with him.

                                                                                                                                                                                                                                                As an equal.

                                                                                                                                                                                                                                                As a partner.

                                                                                                                                                                                                                                                As love.`,
    },
    {
      title: "Chapter 13: The First Doubt",
      content: `
          The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

          Fenwa was the first to act.

          Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

          Villager (amazed):
          “Look at him! He’s working like a slave, and he’s not even from here.”

          Ṣadé watched from under a dry awning, her heart stirred.

          Ṣadé (to herself):
          “Most men would have run. But he stayed. He helped.”

          Later, as the rain slowed, she walked up to him.

          Ṣadé:
          “Thank you. You didn’t have to do all this.”

          Fenwa (wiping mud from his face):
          “If I see a problem, I fix it. That’s who I am.”

          She smiled — the first real smile she’d given anyone in weeks.

          And Fenwa felt it: the first spark of something greater than wealth… greater than power.

          Hope.
          `,
    },
    {
      title: "Chapter 14: The First Promise",
      content: `
              One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

              She sat beside him, silent for a moment.

              Ṣadé:
              “You’ve done so much for everyone. Why don’t you take care of yourself?”

              Fenwa (softly):
              “I’m not used to being cared for. I’ve always been the one helping others.”

              Ṣadé looked at him, then reached out and touched his hand.

              Ṣadé:
              “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

              Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

              Fenwa:
              “And I want to be yours. Not just today, but forever.”

              They sat in silence, holding hands, as the stars began to appear.

              For the first time, they both knew — this was not just love.

              It was destiny.
              `,
    },
    {
      title: "Chapter 15: The First Kiss",
      content: `
                  The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

                  Fenwa and Ṣadé danced side by side, their hands clasped tightly.

                  As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

                  Fenwa looked into her eyes, his voice soft.

                  Fenwa:
                  “May I?”

                  Ṣadé nodded, her heart pounding.

                  He leaned forward, and their lips met.

                  Soft.

                  Sweet.

                  Sacred.

                  The world disappeared.

                  When they pulled away, the crowd cheered.

                  But they only saw each other.

                  And in that kiss, a future was born.

                  Not built on money.

                  But on love.
                  `,
    },
    {
      title: "Chapter 16: The First Storm",
      content: `
                      After the kiss, the village split.

                      Some celebrated.

                      Others mocked.

                      Elder:
                      “Ṣadé is too fine for a poor man like him.”

                      Young Woman:
                      “He’ll never give her the life she deserves.”

                      But Fenwa and Ṣadé stood firm.

                      One afternoon, a group of youths confronted Fenwa.

                      Youth:
                      “You think you can marry Ṣadé? You have nothing!”

                      Fenwa (calmly):
                      “I have love. And that’s more than you’ll ever understand.”

                      They laughed, but he walked away.

                      That night, Ṣadé cried.

                      Ṣadé:
                      “I hate that they hurt you.”

                      Fenwa cupped her face gently.

                      Fenwa:
                      “They don’t hurt me. But if they hurt you, that’s different.”

                      Ṣadé:
                      “Then prove them wrong. Not with money. With character.”

                      Fenwa smiled.

                      Fenwa:
                      “That’s exactly what I’ll do.”
                      `,
    },
    {
      title: "Chapter 17: The First Proposal",
      content: `
                          Fenwa didn’t propose with a ring.

                          He proposed with action.

                          He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                          On opening day, he stood before the village.

                          Fenwa:
                          “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                          He turned to Ṣadé.

                          Fenwa:
                          “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                          The crowd held its breath.

                          Ṣadé stepped forward, tears in her eyes.

                          Ṣadé:
                          “Yes, Fenwa. A thousand times, yes.”

                          The crowd erupted in cheers.

                          No ring.

                          No grand speech.

                          Just love.

                          Pure.

                          Real.

                          And forever.
                          `,
    },
    {
      title: "Chapter 18: The First Doubt from Family",
      content: `
                              Ṣadé’s parents were not happy.

                              Baba Adeoye (angrily):
                              “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                              Mama Oladipo:
                              “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                              Ṣadé (firmly):
                              “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                              Her parents fell silent.

                              But the next day, Baba called Fenwa.

                              Baba Adeoye:
                              “If you marry my daughter, you must provide for her.”

                              Fenwa:
                              “I will. Not with money I show, but with love I live.”

                              Baba scoffed.

                              But Fenwa didn’t argue.

                              Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                              When Baba saw his wife earning real income, his heart softened.

                              And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                              `,
    },
    {
      title: "Chapter 19: The First Wedding Plan",
      content: `
                                  The couple began planning their traditional wedding.

                                  Ṣadé’s friends helped with designs, fabrics, and beadwork.

                                  But one problem remained — money.

                                  Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                                  Ṣadé worried.

                                  Ṣadé:
                                  “We can’t afford a big wedding.”

                                  Fenwa:
                                  “We don’t need big. We need true.”

                                  He wrote a letter to a friend in Lagos.

                                  A week later, a truck arrived — filled with food, drinks, and gifts.

                                  Fenwa had quietly arranged everything.

                                  But he told no one.

                                  On the day of the wedding announcement, the Oba smiled.

                                  Oba:
                                  “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                                  And as the drums played, Fenwa whispered to Ṣadé:

                                  Fenwa:
                                  “One day, the world will know who I am.

                                  But today, I’m just your husband-to-be.”
                                  `,
    },
    {
      title: "Chapter 20: The First Enemy Revealed",
      content: `
                                      Kunle wasn’t done.

                                      He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                                      Kunle:
                                      “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                                      Akinwale (smirking):
                                      “Love is fragile. All it takes is one lie to break it.”

                                      They began spreading rumors.

                                      Rumor 1:
                                      “Fenwa stole money from a church.”

                                      Rumor 2:
                                      “He’s married to three women already.”

                                      Ṣadé heard them.

                                      But she laughed.

                                      Ṣadé:
                                      “I know his heart. And his heart doesn’t lie.”

                                      Fenwa said nothing.

                                      But that night, he prayed:

                                      Fenwa:
                                      “Olúwa, silence the liars. Let truth shine.”

                                      And slowly, the rumors faded.

                                      Because love, when rooted in truth, cannot be shaken by lies.
                                      `,
    },
    {
      title: "Chapter 21: The First Miracle",
      content: `
                                          A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                                          Fenwa acted.

                                          He called an ambulance, paid for treatment, and stayed with the family through the night.

                                          The child survived.

                                          The parents wept at his feet.

                                          Father:
                                          “You saved our son. How can we repay you?”

                                          Fenwa:
                                          “Live. Love. And help someone else one day.”

                                          The story spread.

                                          Villager:
                                          “He didn’t just save a life — he gave hope.”

                                          Even Baba Adeoye nodded in respect.

                                          That evening, Ṣadé looked at Fenwa with awe.

                                          Ṣadé:
                                          “You’re not just a good man.

                                          You’re a blessing.”

                                          Fenwa:
                                          “No.

                                          I’m just a man who remembers what it’s like to need help.

                                          And now, I can give it.”
                                          `,
    },
    {
      title: "Chapter 22: The First Trial of Faith",
      content: `
                                              A drought hit Ìsẹ̀lú. Crops withered, wells dried, and hunger spread.

                                              The villagers panicked.

                                              Villager:
                                              “We need rain! We need help!”

                                              Fenwa organized a prayer session at the shrine.

                                              But he didn’t stop there.

                                              He used his connections to bring in water trucks and drought-resistant seeds.

                                              He taught farmers irrigation techniques and started a food bank.

                                              Some accused him of showing off.

                                              But the children ate.

                                              The elderly drank.

                                              And hope returned.

                                              Ṣadé watched him day after day, giving without rest.

                                              One night, she found him asleep on a bench, exhausted.

                                              She covered him with a cloth and whispered:

                                              Ṣadé:
                                              “Olúwa, protect this man.

                                              He gives everything.

                                              And asks for nothing.”

                                              And in that moment, her love deepened.

                                              Not because he was strong.

                                              But because he kept giving — even when he was tired.
                                              `,
    },
    {
      title: "Chapter 23: The First Public Stand",
      content: `
                                                  During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

                                                  He pulled Fenwa aside.

                                                  Politician:
                                                  “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

                                                  Fenwa:
                                                  “No.”

                                                  Politician:
                                                  “No? Do you know who I am?”

                                                  Fenwa:
                                                  “I know who I am. And I won’t sell my people’s future for cash.”

                                                  He stood before the crowd and spoke:

                                                  Fenwa:
                                                  “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

                                                  The crowd agreed.

                                                  The politician left in fury.

                                                  That night, Ṣadé held Fenwa’s hand.

                                                  Ṣadé:
                                                  “You could have taken the money. For us.”

                                                  Fenwa:
                                                  “And lose our integrity? No price is worth that.”

                                                  She kissed him.

                                                  And in that kiss, she saw the future.

                                                  A life of courage.

                                                  Of truth.

                                                  Of love that stood tall — no matter the storm.
                                                  `,
    },
    {
      title: "Chapter 24: The First Blessing",
      content: `
                                                      The Oba called Fenwa to the palace.

                                                      Oba:
                                                      “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                                                      It was a high honor.

                                                      Fenwa bowed.

                                                      Fenwa:
                                                      “I accept not for title, but for service.”

                                                      That night, the village celebrated.

                                                      Drummers played.

                                                      Women danced.

                                                      Children sang:

                                                      “Fenwa the humble, Fenwa the strong!”

                                                      Ṣadé watched, her heart full.

                                                      Her parents, once ashamed, now smiled with pride.

                                                      Mama Oladipo:
                                                      “He is not poor.

                                                      He is rich in character.”

                                                      And as the firelight danced, Fenwa pulled Ṣadé close.

                                                      Fenwa:
                                                      “This is my wealth.

                                                      You.

                                                      This village.

                                                      This life.”

                                                      No mansion.

                                                      No private jet.

                                                      Just love.

                                                      And purpose.

                                                      And a future brighter than gold.
                                                      `,
    },
    {
      title: "Chapter 13: The First Doubt",
      content: `
        The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

        Fenwa was the first to act.

        Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

        Villager (amazed):
        “Look at him! He’s working like a slave, and he’s not even from here.”

        Ṣadé watched from under a dry awning, her heart stirred.

        Ṣadé (to herself):
        “Most men would have run. But he stayed. He helped.”

        Later, as the rain slowed, she walked up to him.

        Ṣadé:
        “Thank you. You didn’t have to do all this.”

        Fenwa (wiping mud from his face):
        “If I see a problem, I fix it. That’s who I am.”

        She smiled — the first real smile she’d given anyone in weeks.

        And Fenwa felt it: the first spark of something greater than wealth… greater than power.

        Hope.
        `,
    },
    {
      title: "Chapter 14: The First Promise",
      content: `
            One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

            She sat beside him, silent for a moment.

            Ṣadé:
            “You’ve done so much for everyone. Why don’t you take care of yourself?”

            Fenwa (softly):
            “I’m not used to being cared for. I’ve always been the one helping others.”

            Ṣadé looked at him, then reached out and touched his hand.

            Ṣadé:
            “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

            Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

            Fenwa:
            “And I want to be yours. Not just today, but forever.”

            They sat in silence, holding hands, as the stars began to appear.

            For the first time, they both knew — this was not just love.

            It was destiny.
            `,
    },
    {
      title: "Chapter 15: The First Kiss",
      content: `
                The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

                Fenwa and Ṣadé danced side by side, their hands clasped tightly.

                As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

                Fenwa looked into her eyes, his voice soft.

                Fenwa:
                “May I?”

                Ṣadé nodded, her heart pounding.

                He leaned forward, and their lips met.

                Soft.

                Sweet.

                Sacred.

                The world disappeared.

                When they pulled away, the crowd cheered.

                But they only saw each other.

                And in that kiss, a future was born.

                Not built on money.

                But on love.
                `,
    },
    {
      title: "Chapter 16: The First Storm",
      content: `
                    After the kiss, the village split.

                    Some celebrated.

                    Others mocked.

                    Elder:
                    “Ṣadé is too fine for a poor man like him.”

                    Young Woman:
                    “He’ll never give her the life she deserves.”

                    But Fenwa and Ṣadé stood firm.

                    One afternoon, a group of youths confronted Fenwa.

                    Youth:
                    “You think you can marry Ṣadé? You have nothing!”

                    Fenwa (calmly):
                    “I have love. And that’s more than you’ll ever understand.”

                    They laughed, but he walked away.

                    That night, Ṣadé cried.

                    Ṣadé:
                    “I hate that they hurt you.”

                    Fenwa cupped her face gently.

                    Fenwa:
                    “They don’t hurt me. But if they hurt you, that’s different.”

                    Ṣadé:
                    “Then prove them wrong. Not with money. With character.”

                    Fenwa smiled.

                    Fenwa:
                    “That’s exactly what I’ll do.”
                    `,
    },
    {
      title: "Chapter 17: The First Proposal",
      content: `
                        Fenwa didn’t propose with a ring.

                        He proposed with action.

                        He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                        On opening day, he stood before the village.

                        Fenwa:
                        “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                        He turned to Ṣadé.

                        Fenwa:
                        “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                        The crowd held its breath.

                        Ṣadé stepped forward, tears in her eyes.

                        Ṣadé:
                        “Yes, Fenwa. A thousand times, yes.”

                        The crowd erupted in cheers.

                        No ring.

                        No grand speech.

                        Just love.

                        Pure.

                        Real.

                        And forever.
                        `,
    },
    {
      title: "Chapter 18: The First Doubt from Family",
      content: `
                            Ṣadé’s parents were not happy.

                            Baba Adeoye (angrily):
                            “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                            Mama Oladipo:
                            “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                            Ṣadé (firmly):
                            “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                            Her parents fell silent.

                            But the next day, Baba called Fenwa.

                            Baba Adeoye:
                            “If you marry my daughter, you must provide for her.”

                            Fenwa:
                            “I will. Not with money I show, but with love I live.”

                            Baba scoffed.

                            But Fenwa didn’t argue.

                            Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                            When Baba saw his wife earning real income, his heart softened.

                            And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                            `,
    },
    {
      title: "Chapter 19: The First Wedding Plan",
      content: `
                                The couple began planning their traditional wedding.

                                Ṣadé’s friends helped with designs, fabrics, and beadwork.

                                But one problem remained — money.

                                Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                                Ṣadé worried.

                                Ṣadé:
                                “We can’t afford a big wedding.”

                                Fenwa:
                                “We don’t need big. We need true.”

                                He wrote a letter to a friend in Lagos.

                                A week later, a truck arrived — filled with food, drinks, and gifts.

                                Fenwa had quietly arranged everything.

                                But he told no one.

                                On the day of the wedding announcement, the Oba smiled.

                                Oba:
                                “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                                And as the drums played, Fenwa whispered to Ṣadé:

                                Fenwa:
                                “One day, the world will know who I am.

                                But today, I’m just your husband-to-be.”
                                `,
    },
    {
      title: "Chapter 20: The First Enemy Revealed",
      content: `
                                    Kunle wasn’t done.

                                    He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                                    Kunle:
                                    “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                                    Akinwale (smirking):
                                    “Love is fragile. All it takes is one lie to break it.”

                                    They began spreading rumors.

                                    Rumor 1:
                                    “Fenwa stole money from a church.”

                                    Rumor 2:
                                    “He’s married to three women already.”

                                    Ṣadé heard them.

                                    But she laughed.

                                    Ṣadé:
                                    “I know his heart. And his heart doesn’t lie.”

                                    Fenwa said nothing.

                                    But that night, he prayed:

                                    Fenwa:
                                    “Olúwa, silence the liars. Let truth shine.”

                                    And slowly, the rumors faded.

                                    Because love, when rooted in truth, cannot be shaken by lies.
                                    `,
    },
    {
      title: "Chapter 21: The First Miracle",
      content: `
                                        A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                                        Fenwa acted.

                                        He called an ambulance, paid for treatment, and stayed with the family through the night.

                                        The child survived.

                                        The parents wept at his feet.

                                        Father:
                                        “You saved our son. How can we repay you?”

                                        Fenwa:
                                        “Live. Love. And help someone else one day.”

                                        The story spread.

                                        Villager:
                                        “He didn’t just save a life — he gave hope.”

                                        Even Baba Adeoye nodded in respect.

                                        That evening, Ṣadé looked at Fenwa with awe.

                                        Ṣadé:
                                        “You’re not just a good man.

                                        You’re a blessing.”

                                        Fenwa:
                                        “No.

                                        I’m just a man who remembers what it’s like to need help.

                                        And now, I can give it.”
                                        `,
    },
    {
      title: "Chapter 22: The First Trial of Faith",
      content: `
                                            A drought hit Ìsẹ̀lú. Crops withered, wells dried, and hunger spread.

                                            The villagers panicked.

                                            Villager:
                                            “We need rain! We need help!”

                                            Fenwa organized a prayer session at the shrine.

                                            But he didn’t stop there.

                                            He used his connections to bring in water trucks and drought-resistant seeds.

                                            He taught farmers irrigation techniques and started a food bank.

                                            Some accused him of showing off.

                                            But the children ate.

                                            The elderly drank.

                                            And hope returned.

                                            Ṣadé watched him day after day, giving without rest.

                                            One night, she found him asleep on a bench, exhausted.

                                            She covered him with a cloth and whispered:

                                            Ṣadé:
                                            “Olúwa, protect this man.

                                            He gives everything.

                                            And asks for nothing.”

                                            And in that moment, her love deepened.

                                            Not because he was strong.

                                            But because he kept giving — even when he was tired.
                                            `,
    },
    {
      title: "Chapter 23: The First Public Stand",
      content: `
                                                During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

                                                He pulled Fenwa aside.

                                                Politician:
                                                “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

                                                Fenwa:
                                                “No.”

                                                Politician:
                                                “No? Do you know who I am?”

                                                Fenwa:
                                                “I know who I am. And I won’t sell my people’s future for cash.”

                                                He stood before the crowd and spoke:

                                                Fenwa:
                                                “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

                                                The crowd agreed.

                                                The politician left in fury.

                                                That night, Ṣadé held Fenwa’s hand.

                                                Ṣadé:
                                                “You could have taken the money. For us.”

                                                Fenwa:
                                                “And lose our integrity? No price is worth that.”

                                                She kissed him.

                                                And in that kiss, she saw the future.

                                                A life of courage.

                                                Of truth.

                                                Of love that stood tall — no matter the storm.
                                                `,
    },
    {
      title: "Chapter 24: The First Blessing",
      content: `
                                                    The Oba called Fenwa to the palace.

                                                    Oba:
                                                    “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                                                    It was a high honor.

                                                    Fenwa bowed.

                                                    Fenwa:
                                                    “I accept not for title, but for service.”

                                                    That night, the village celebrated.

                                                    Drummers played.

                                                    Women danced.

                                                    Children sang:

                                                    “Fenwa the humble, Fenwa the strong!”

                                                    Ṣadé watched, her heart full.

                                                    Her parents, once ashamed, now smiled with pride.

                                                    Mama Oladipo:
                                                    “He is not poor.

                                                    He is rich in character.”

                                                    And as the firelight danced, Fenwa pulled Ṣadé close.

                                                    Fenwa:
                                                    “This is my wealth.

                                                    You.

                                                    This village.

                                                    This life.”

                                                    No mansion.

                                                    No private jet.

                                                    Just love.

                                                    And purpose.

                                                    And a future brighter than gold.
                                                    `,
    },
    {
      title: "Chapter 25: The First Doubt",
      content: `
        The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

        Fenwa was the first to act.

        Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

        Villager (amazed):
        “Look at him! He’s working like a slave, and he’s not even from here.”

        Ṣadé watched from under a dry awning, her heart stirred.

        Ṣadé (to herself):
        “Most men would have run. But he stayed. He helped.”

        Later, as the rain slowed, she walked up to him.

        Ṣadé:
        “Thank you. You didn’t have to do all this.”

        Fenwa (wiping mud from his face):
        “If I see a problem, I fix it. That’s who I am.”

        She smiled — the first real smile she’d given anyone in weeks.

        And Fenwa felt it: the first spark of something greater than wealth… greater than power.

        Hope.
        `,
    },
    {
      title: "Chapter 26: The First Promise",
      content: `
            One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

            She sat beside him, silent for a moment.

            Ṣadé:
            “You’ve done so much for everyone. Why don’t you take care of yourself?”

            Fenwa (softly):
            “I’m not used to being cared for. I’ve always been the one helping others.”

            Ṣadé looked at him, then reached out and touched his hand.

            Ṣadé:
            “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

            Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

            Fenwa:
            “And I want to be yours. Not just today, but forever.”

            They sat in silence, holding hands, as the stars began to appear.

            For the first time, they both knew — this was not just love.

            It was destiny.
            `,
    },
    {
      title: "Chapter 27: The First Kiss",
      content: `
                The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

                Fenwa and Ṣadé danced side by side, their hands clasped tightly.

                As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

                Fenwa looked into her eyes, his voice soft.

                Fenwa:
                “May I?”

                Ṣadé nodded, her heart pounding.

                He leaned forward, and their lips met.

                Soft.

                Sweet.

                Sacred.

                The world disappeared.

                When they pulled away, the crowd cheered.

                But they only saw each other.

                And in that kiss, a future was born.

                Not built on money.

                But on love.
                `,
    },
    {
      title: "Chapter 28: The First Storm",
      content: `
                    After the kiss, the village split.

                    Some celebrated.

                    Others mocked.

                    Elder:
                    “Ṣadé is too fine for a poor man like him.”

                    Young Woman:
                    “He’ll never give her the life she deserves.”

                    But Fenwa and Ṣadé stood firm.

                    One afternoon, a group of youths confronted Fenwa.

                    Youth:
                    “You think you can marry Ṣadé? You have nothing!”

                    Fenwa (calmly):
                    “I have love. And that’s more than you’ll ever understand.”

                    They laughed, but he walked away.

                    That night, Ṣadé cried.

                    Ṣadé:
                    “I hate that they hurt you.”

                    Fenwa cupped her face gently.

                    Fenwa:
                    “They don’t hurt me. But if they hurt you, that’s different.”

                    Ṣadé:
                    “Then prove them wrong. Not with money. With character.”

                    Fenwa smiled.

                    Fenwa:
                    “That’s exactly what I’ll do.”
                    `,
    },
    {
      title: "Chapter 29: The First Proposal",
      content: `
                        Fenwa didn’t propose with a ring.

                        He proposed with action.

                        He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                        On opening day, he stood before the village.

                        Fenwa:
                        “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                        He turned to Ṣadé.

                        Fenwa:
                        “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                        The crowd held its breath.

                        Ṣadé stepped forward, tears in her eyes.

                        Ṣadé:
                        “Yes, Fenwa. A thousand times, yes.”

                        The crowd erupted in cheers.

                        No ring.

                        No grand speech.

                        Just love.

                        Pure.

                        Real.

                        And forever.
                        `,
    },
    {
      title: "Chapter 30: The First Doubt from Family",
      content: `
                            Ṣadé’s parents were not happy.

                            Baba Adeoye (angrily):
                            “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                            Mama Oladipo:
                            “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                            Ṣadé (firmly):
                            “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                            Her parents fell silent.

                            But the next day, Baba called Fenwa.

                            Baba Adeoye:
                            “If you marry my daughter, you must provide for her.”

                            Fenwa:
                            “I will. Not with money I show, but with love I live.”

                            Baba scoffed.

                            But Fenwa didn’t argue.

                            Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                            When Baba saw his wife earning real income, his heart softened.

                            And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                            `,
    },
    {
      title: "Chapter 31: The First Wedding Plan",
      content: `
                                The couple began planning their traditional wedding.

                                Ṣadé’s friends helped with designs, fabrics, and beadwork.

                                But one problem remained — money.

                                Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                                Ṣadé worried.

                                Ṣadé:
                                “We can’t afford a big wedding.”

                                Fenwa:
                                “We don’t need big. We need true.”

                                He wrote a letter to a friend in Lagos.

                                A week later, a truck arrived — filled with food, drinks, and gifts.

                                Fenwa had quietly arranged everything.

                                But he told no one.

                                On the day of the wedding announcement, the Oba smiled.

                                Oba:
                                “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                                And as the drums played, Fenwa whispered to Ṣadé:

                                Fenwa:
                                “One day, the world will know who I am.

                                But today, I’m just your husband-to-be.”
                                `,
    },
    {
      title: "Chapter 32: The First Enemy Revealed",
      content: `
                                    Kunle wasn’t done.

                                    He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                                    Kunle:
                                    “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                                    Akinwale (smirking):
                                    “Love is fragile. All it takes is one lie to break it.”

                                    They began spreading rumors.

                                    Rumor 1:
                                    “Fenwa stole money from a church.”

                                    Rumor 2:
                                    “He’s married to three women already.”

                                    Ṣadé heard them.

                                    But she laughed.

                                    Ṣadé:
                                    “I know his heart. And his heart doesn’t lie.”

                                    Fenwa said nothing.

                                    But that night, he prayed:

                                    Fenwa:
                                    “Olúwa, silence the liars. Let truth shine.”

                                    And slowly, the rumors faded.

                                    Because love, when rooted in truth, cannot be shaken by lies.
                                    `,
    },
    {
      title: "Chapter 33: The First Miracle",
      content: `
                                        A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                                        Fenwa acted.

                                        He called an ambulance, paid for treatment, and stayed with the family through the night.

                                        The child survived.

                                        The parents wept at his feet.

                                        Father:
                                        “You saved our son. How can we repay you?”

                                        Fenwa:
                                        “Live. Love. And help someone else one day.”

                                        The story spread.

                                        Villager:
                                        “He didn’t just save a life — he gave hope.”

                                        Even Baba Adeoye nodded in respect.

                                        That evening, Ṣadé looked at Fenwa with awe.

                                        Ṣadé:
                                        “You’re not just a good man.

                                        You’re a blessing.”

                                        Fenwa:
                                        “No.

                                        I’m just a man who remembers what it’s like to need help.

                                        And now, I can give it.”
                                        `,
    },
    {
      title: "Chapter 34: The First Trial of Faith",
      content: `
          A drought hit Ìsẹ̀lú. Crops withered, wells dried, and hunger spread.

          The villagers panicked.

          Villager:
          “We need rain! We need help!”

          Fenwa organized a prayer session at the shrine.

          But he didn’t stop there.

          He used his connections to bring in water trucks and drought-resistant seeds.

          He taught farmers irrigation techniques and started a food bank.

          Some accused him of showing off.

          But the children ate.

          The elderly drank.

          And hope returned.

          Ṣadé watched him day after day, giving without rest.

          One night, she found him asleep on a bench, exhausted.

          She covered him with a cloth and whispered:

          Ṣadé:
          “Olúwa, protect this man.

          He gives everything.

          And asks for nothing.”

          And in that moment, her love deepened.

          Not because he was strong.

          But because he kept giving — even when he was tired.
          `,
    },
    {
      title: "Chapter 35: The First Public Stand",
      content: `
              During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

              He pulled Fenwa aside.

              Politician:
              “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

              Fenwa:
              “No.”

              Politician:
              “No? Do you know who I am?”

              Fenwa:
              “I know who I am. And I won’t sell my people’s future for cash.”

              He stood before the crowd and spoke:

              Fenwa:
              “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

              The crowd agreed.

              The politician left in fury.

              That night, Ṣadé held Fenwa’s hand.

              Ṣadé:
              “You could have taken the money. For us.”

              Fenwa:
              “And lose our integrity? No price is worth that.”

              She kissed him.

              And in that kiss, she saw the future.

              A life of courage.

              Of truth.

              Of love that stood tall — no matter the storm.
              `,
    },
    {
      title: "Chapter 36: The First Blessing",
      content: `
                  The Oba called Fenwa to the palace.

                  Oba:
                  “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                  It was a high honor.

                  Fenwa bowed.

                  Fenwa:
                  “I accept not for title, but for service.”

                  That night, the village celebrated.

                  Drummers played.

                  Women danced.

                  Children sang:

                  “Fenwa the humble, Fenwa the strong!”

                  Ṣadé watched, her heart full.

                  Her parents, once ashamed, now smiled with pride.

                  Mama Oladipo:
                  “He is not poor.

                  He is rich in character.”

                  And as the firelight danced, Fenwa pulled Ṣadé close.

                  Fenwa:
                  “This is my wealth.

                  You.

                  This village.

                  This life.”

                  No mansion.

                  No private jet.

                  Just love.

                  And purpose.

                  And a future brighter than gold.
                  `,
    },
    {
      title: "Chapter 37: The First Doubt",
      content: `
                      Not everyone celebrated Fenwa’s recognition.

                      At the back of the crowd, Kunle — Ṣadé’s cousin — watched with narrowed eyes. He had always wanted Ṣadé for himself, but she had rejected him time and again.

                      Now, this stranger was winning her silent admiration.

                      Kunle (muttering to his friend):
                      “Who does he think he is? A bicycle boy becoming a village hero?”

                      Friend:
                      “Let him enjoy it. No one stays humble when they get power.”

                      Kunle smirked.

                      Later, he approached Ṣadé.

                      Kunle:
                      “You’re watching him again. Don’t be fooled by his act. He’s just trying to impress you.”

                      Ṣadé (coldly):
                      “He doesn’t need to impress me. He’s already proven who he is.”

                      Kunle’s face darkened.

                      Kunle:
                      “One day, everyone will see the truth. And when they do, he’ll be gone.”

                      But Ṣadé didn’t flinch.

                      Her heart had already made a choice.

                      Even if her mind still doubted.
                      `,
    },
    {
      title: "Chapter 38: The Rainy Night",
      content: `
                          A violent storm hit Ìsẹ̀lú in the middle of the night. Thunder cracked, trees swayed, and the river began to rise.

                          Fenwa woke to the sound of shouting. A child’s voice screamed from across the compound.

                          Child:
                          “Help! The roof is collapsing!”

                          Without thinking, Fenwa grabbed a tarp and ran through the pouring rain. The roof of a small hut — where a mother and her two children lived — was caving in.

                          He climbed onto the soaked roof, nails tearing his hands, wind nearly throwing him off. He secured the tarp with ropes and heavy stones.

                          Then, he carried the family to the guesthouse, one by one.

                          By morning, the storm had passed.

                          The mother knelt before him, weeping.

                          Mother:
                          “You saved my children. I will never forget this.”

                          Fenwa helped her up.

                          Fenwa:
                          “I was just in the right place at the right time.”

                          But word spread fast.

                          Villager:
                          “He risked his life for strangers.”

                          Another:
                          “Even our own men didn’t move. But he did.”

                          Ṣadé heard the stories. That night, she stood at her window, watching Fenwa sit alone under a tree, staring at the stars.

                          She whispered:
                          “You’re not just kind.
                          You’re extraordinary.
                          And I’m falling for you.”
                          `,
    },
    {
      title: "Chapter 39: The First Gift",
      content: `
                              Fenwa noticed Ṣadé’s sewing machine was broken. It was her only source of income — she made clothes for the village women.

                              The next day, he disappeared for hours.

                              When he returned, he carried a brand-new electric sewing machine — sleek, modern, and wrapped in cloth.

                              He placed it at her doorstep with a note:

                              “To the woman who makes beauty from cloth. May your hands never tire. — F.”

                              Ṣadé opened the package, stunned.

                              “How did he afford this? He has nothing!”

                              She ran to find him.

                              Ṣadé:
                              “This machine… it must have cost a fortune! How?”

                              Fenwa:
                              “I saved. For something important.”

                              Ṣadé:
                              “But why me?”

                              Fenwa (softly):
                              “Because you work hard. And hard work deserves support.”

                              Tears filled her eyes.

                              No man had ever given her a gift without expecting something in return.

                              But Fenwa? He gave — and asked for nothing.

                              That night, she prayed:

                              “Olúwa, if this man is truly good, let my heart be open to him.”
                              `,
    },
    {
      title: "Chapter 40: The First Touch",
      content: `
                                  During the harvest festival, villagers played traditional games. One challenge was the rope tug-of-war.

                                  Ṣadé’s team was losing. The opposing side pulled hard, and she stumbled, falling into the mud.

                                  Before she could rise, a hand reached down.

                                  It was Fenwa.

                                  He pulled her up gently, his fingers warm against hers.

                                  For a brief second, they held hands.

                                  Time stopped.

                                  Ṣadé’s breath caught. Her heart pounded.

                                  Fenwa (softly):
                                  “Are you okay?”

                                  Ṣadé (nervously):
                                  “Yes… thank you.”

                                  They let go, but neither could forget the touch.

                                  That evening, as the drums played and dancers twisted in the firelight, they found themselves standing side by side.

                                  Ṣadé:
                                  “Why do you help everyone?”

                                  Fenwa:
                                  “Because one day, someone helped me when I had nothing. I never forgot that.”

                                  Ṣadé looked into his eyes.

                                  And for the first time, she saw not just a man.

                                  But a soul.

                                  Pure.

                                  True.

                                  And hers.
                                  `,
    },
    {
      title: "Chapter 41: The First Jealousy",
      content: `
                                      Kunle saw everything — the gift, the touch, the way Ṣadé looked at Fenwa.

                                      His jealousy burned like fire.

                                      At the palm wine joint, he drank heavily, muttering to his friends.

                                      Kunle:
                                      “That man is a fraud. He’s pretending to be poor so Ṣadé will pity him.”

                                      Friend:
                                      “Maybe he’s just a good man.”

                                      Kunle (slamming his cup):
                                      “There’s no such thing! Every man wants something. And when he gets it, he’ll leave her.”

                                      That night, he spread rumors.

                                      Kunle (whispering):
                                      “I heard he’s running from the law. That’s why he’s hiding here.”

                                      The gossip spread.

                                      But Ṣadé refused to believe it.

                                      When a woman confronted her:

                                      Woman:
                                      “Don’t you know he’s dangerous?”

                                      Ṣadé (firmly):
                                      “I know his heart. And his heart is clean.”

                                      Fenwa heard the rumors. He said nothing.

                                      But that night, he prayed:

                                      “Olúwa, protect us from lies. Let truth rise.”

                                      And in the silence, he felt peace.

                                      Because he knew — no lie could erase what love had already built.
                                      `,
    },
    {
      title: "Chapter 42: The First Challenge",
      content: `
                                          A wealthy businessman from Lagos visited Ìsẹ̀lú, scouting for land to build a resort. He offered huge sums to villagers who would sell.

                                          Many agreed.

                                          But the land included the village well, the sacred grove, and the school compound.

                                          Fenwa stood before the Oba and elders.

                                          Fenwa:
                                          “This land is not for sale. It belongs to our ancestors, our children, our future.”

                                          Villager:
                                          “But the money! We could buy cars, travel abroad!”

                                          Fenwa:
                                          “And lose our identity? Money comes and goes. But heritage? It lasts forever.”

                                          He organized a meeting, taught the villagers about sustainable farming, and proposed building an eco-tourism center — owned by the community.

                                          Ṣadé stood beside him.

                                          Ṣadé:
                                          “He’s right. We don’t need to sell our soul for wealth.”

                                          Together, they convinced the village to reject the offer.

                                          The businessman left in anger.

                                          But Fenwa smiled.

                                          For the first time, he wasn’t just a helper.

                                          He was a leader.

                                          And Ṣadé? She was no longer just watching.

                                          She was standing with him.

                                          As an equal.

                                          As a partner.

                                          As love.
                                          `,
    },
    {
      title: "Chapter 43: The First Doubt from Family",
      content: `
                                              Ṣadé’s parents were not happy.

                                              Baba Adeoye (angrily):
                                              “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                                              Mama Oladipo:
                                              “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                                              Ṣadé (firmly):
                                              “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                                              Her parents fell silent.

                                              But the next day, Baba called Fenwa.

                                              Baba Adeoye:
                                              “If you marry my daughter, you must provide for her.”

                                              Fenwa:
                                              “I will. Not with money I show, but with love I live.”

                                              Baba scoffed.

                                              But Fenwa didn’t argue.

                                              Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                                              When Baba saw his wife earning real income, his heart softened.

                                              And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                                              `,
    },
    {
      title: "Chapter 44: The First Wedding Plan",
      content: `
                                                  The couple began planning their traditional wedding.

                                                  Ṣadé’s friends helped with designs, fabrics, and beadwork.

                                                  But one problem remained — money.

                                                  Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                                                  Ṣadé worried.

                                                  Ṣadé:
                                                  “We can’t afford a big wedding.”

                                                  Fenwa:
                                                  “We don’t need big. We need true.”

                                                  He wrote a letter to a friend in Lagos.

                                                  A week later, a truck arrived — filled with food, drinks, and gifts.

                                                  Fenwa had quietly arranged everything.

                                                  But he told no one.

                                                  On the day of the wedding announcement, the Oba smiled.

                                                  Oba:
                                                  “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                                                  And as the drums played, Fenwa whispered to Ṣadé:

                                                  Fenwa:
                                                  “One day, the world will know who I am.

                                                  But today, I’m just your husband-to-be.”
                                                  `,
    },
    {
      title: "Chapter 45: The First Enemy Revealed",
      content: `
                                                      Kunle wasn’t done.

                                                      He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                                                      Kunle:
                                                      “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                                                      Akinwale (smirking):
                                                      “Love is fragile. All it takes is one lie to break it.”

                                                      They began spreading rumors.

                                                      Rumor 1:
                                                      “Fenwa stole money from a church.”

                                                      Rumor 2:
                                                      “He’s married to three women already.”

                                                      Ṣadé heard them.

                                                      But she laughed.

                                                      Ṣadé:
                                                      “I know his heart. And his heart doesn’t lie.”

                                                      Fenwa said nothing.

                                                      But that night, he prayed:

                                                      Fenwa:
                                                      “Olúwa, silence the liars. Let truth shine.”

                                                      And slowly, the rumors faded.

                                                      Because love, when rooted in truth, cannot be shaken by lies.
                                                      `,
    },
    {
      title: "Chapter 46: The First Miracle",
      content: `
                                                          A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                                                          Fenwa acted.

                                                          He called an ambulance, paid for treatment, and stayed with the family through the night.

                                                          The child survived.

                                                          The parents wept at his feet.

                                                          Father:
                                                          “You saved our son. How can we repay you?”

                                                          Fenwa:
                                                          “Live. Love. And help someone else one day.”

                                                          The story spread.

                                                          Villager:
                                                          “He didn’t just save a life — he gave hope.”

                                                          Even Baba Adeoye nodded in respect.

                                                          That evening, Ṣadé looked at Fenwa with awe.

                                                          Ṣadé:
                                                          “You’re not just a good man.

                                                          You’re a blessing.”

                                                          Fenwa:
                                                          “No.

                                                          I’m just a man who remembers what it’s like to need help.

                                                          And now, I can give it.”
                                                          `,
    },
    {
      title: "Chapter 47: The First Public Stand",
      content: `
                                                              During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

                                                              He pulled Fenwa aside.

                                                              Politician:
                                                              “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

                                                              Fenwa:
                                                              “No.”

                                                              Politician:
                                                              “No? Do you know who I am?”

                                                              Fenwa:
                                                              “I know who I am. And I won’t sell my people’s future for cash.”

                                                              He stood before the crowd and spoke:

                                                              Fenwa:
                                                              “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

                                                              The crowd agreed.

                                                              The politician left in fury.

                                                              That night, Ṣadé held Fenwa’s hand.

                                                              Ṣadé:
                                                              “You could have taken the money. For us.”

                                                              Fenwa:
                                                              “And lose our integrity? No price is worth that.”

                                                              She kissed him.

                                                              And in that kiss, she saw the future.

                                                              A life of courage.

                                                              Of truth.

                                                              Of love that stood tall — no matter the storm.
                                                              `,
    },
    {
      title: "Chapter 48: The First Blessing",
      content: `
                                                                  The Oba called Fenwa to the palace.

                                                                  Oba:
                                                                  “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                                                                  It was a high honor.

                                                                  Fenwa bowed.

                                                                  Fenwa:
                                                                  “I accept not for title, but for service.”

                                                                  That night, the village celebrated.

                                                                  Drummers played.

                                                                  Women danced.

                                                                  Children sang:

                                                                  “Fenwa the humble, Fenwa the strong!”

                                                                  Ṣadé watched, her heart full.

                                                                  Her parents, once ashamed, now smiled with pride.

                                                                  Mama Oladipo:
                                                                  “He is not poor.

                                                                  He is rich in character.”

                                                                  And as the firelight danced, Fenwa pulled Ṣadé close.

                                                                  Fenwa:
                                                                  “This is my wealth.

                                                                  You.

                                                                  This village.

                                                                  This life.”

                                                                  No mansion.

                                                                  No private jet.

                                                                  Just love.

                                                                  And purpose.

                                                                  And a future brighter than gold.
                                                                  `,
    },
    {
      title: "Chapter 49: The First Doubt",
      content: `
                                                                      The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

                                                                      Fenwa was the first to act.

                                                                      Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

                                                                      Villager (amazed):
                                                                      “Look at him! He’s working like a slave, and he’s not even from here.”

                                                                      Ṣadé watched from under a dry awning, her heart stirred.

                                                                      Ṣadé (to herself):
                                                                      “Most men would have run. But he stayed. He helped.”

                                                                      Later, as the rain slowed, she walked up to him.

                                                                      Ṣadé:
                                                                      “Thank you. You didn’t have to do all this.”

                                                                      Fenwa (wiping mud from his face):
                                                                      “If I see a problem, I fix it. That’s who I am.”

                                                                      She smiled — the first real smile she’d given anyone in weeks.

                                                                      And Fenwa felt it: the first spark of something greater than wealth… greater than power.

                                                                      Hope.
                                                                      `,
    },
    {
      title: "Chapter 50: The First Promise",
      content: `
                                                                          One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

                                                                          She sat beside him, silent for a moment.

                                                                          Ṣadé:
                                                                          “You’ve done so much for everyone. Why don’t you take care of yourself?”

                                                                          Fenwa (softly):
                                                                          “I’m not used to being cared for. I’ve always been the one helping others.”

                                                                          Ṣadé looked at him, then reached out and touched his hand.

                                                                          Ṣadé:
                                                                          “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

                                                                          Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

                                                                          Fenwa:
                                                                          “And I want to be yours. Not just today, but forever.”

                                                                          They sat in silence, holding hands, as the stars began to appear.

                                                                          For the first time, they both knew — this was not just love.

                                                                          It was destiny.
                                                                          `,
    },
    {
      title: "Chapter 51: The First Kiss",
      content: `
        The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

        Fenwa and Ṣadé danced side by side, their hands clasped tightly.

        As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

        Fenwa looked into her eyes, his voice soft.

        Fenwa:
        “May I?”

        Ṣadé nodded, her heart pounding.

        He leaned forward, and their lips met.

        Soft.

        Sweet.

        Sacred.

        The world disappeared.

        When they pulled away, the crowd cheered.

        But they only saw each other.

        And in that kiss, a future was born.

        Not built on money.

        But on love.
        `,
    },
    {
      title: "Chapter 52: The First Storm",
      content: `
            After the kiss, the village split.

            Some celebrated.

            Others mocked.

            Elder:
            “Ṣadé is too fine for a poor man like him.”

            Young Woman:
            “He’ll never give her the life she deserves.”

            But Fenwa and Ṣadé stood firm.

            One afternoon, a group of youths confronted Fenwa.

            Youth:
            “You think you can marry Ṣadé? You have nothing!”

            Fenwa (calmly):
            “I have love. And that’s more than you’ll ever understand.”

            They laughed, but he walked away.

            That night, Ṣadé cried.

            Ṣadé:
            “I hate that they hurt you.”

            Fenwa cupped her face gently.

            Fenwa:
            “They don’t hurt me. But if they hurt you, that’s different.”

            Ṣadé:
            “Then prove them wrong. Not with money. With character.”

            Fenwa smiled.

            Fenwa:
            “That’s exactly what I’ll do.”
            `,
    },
    {
      title: "Chapter 53: The First Proposal",
      content: `
                Fenwa didn’t propose with a ring.

                He proposed with action.

                He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                On opening day, he stood before the village.

                Fenwa:
                “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                He turned to Ṣadé.

                Fenwa:
                “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                The crowd held its breath.

                Ṣadé stepped forward, tears in her eyes.

                Ṣadé:
                “Yes, Fenwa. A thousand times, yes.”

                The crowd erupted in cheers.

                No ring.

                No grand speech.

                Just love.

                Pure.

                Real.

                And forever.
                `,
    },
    {
      title: "Chapter 54: The First Doubt from Family",
      content: `
                    Ṣadé’s parents were not happy.

                    Baba Adeoye (angrily):
                    “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                    Mama Oladipo:
                    “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                    Ṣadé (firmly):
                    “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                    Her parents fell silent.

                    But the next day, Baba called Fenwa.

                    Baba Adeoye:
                    “If you marry my daughter, you must provide for her.”

                    Fenwa:
                    “I will. Not with money I show, but with love I live.”

                    Baba scoffed.

                    But Fenwa didn’t argue.

                    Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                    When Baba saw his wife earning real income, his heart softened.

                    And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                    `,
    },
    {
      title: "Chapter 55: The First Wedding Plan",
      content: `
                        The couple began planning their traditional wedding.

                        Ṣadé’s friends helped with designs, fabrics, and beadwork.

                        But one problem remained — money.

                        Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                        Ṣadé worried.

                        Ṣadé:
                        “We can’t afford a big wedding.”

                        Fenwa:
                        “We don’t need big. We need true.”

                        He wrote a letter to a friend in Lagos.

                        A week later, a truck arrived — filled with food, drinks, and gifts.

                        Fenwa had quietly arranged everything.

                        But he told no one.

                        On the day of the wedding announcement, the Oba smiled.

                        Oba:
                        “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                        And as the drums played, Fenwa whispered to Ṣadé:

                        Fenwa:
                        “One day, the world will know who I am.

                        But today, I’m just your husband-to-be.”
                        `,
    },
    {
      title: "Chapter 56: The First Enemy Revealed",
      content: `
                            Kunle wasn’t done.

                            He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                            Kunle:
                            “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                            Akinwale (smirking):
                            “Love is fragile. All it takes is one lie to break it.”

                            They began spreading rumors.

                            Rumor 1:
                            “Fenwa stole money from a church.”

                            Rumor 2:
                            “He’s married to three women already.”

                            Ṣadé heard them.

                            But she laughed.

                            Ṣadé:
                            “I know his heart. And his heart doesn’t lie.”

                            Fenwa said nothing.

                            But that night, he prayed:

                            Fenwa:
                            “Olúwa, silence the liars. Let truth shine.”

                            And slowly, the rumors faded.

                            Because love, when rooted in truth, cannot be shaken by lies.
                            `,
    },
    {
      title: "Chapter 57: The First Miracle",
      content: `
                                A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                                Fenwa acted.

                                He called an ambulance, paid for treatment, and stayed with the family through the night.

                                The child survived.

                                The parents wept at his feet.

                                Father:
                                “You saved our son. How can we repay you?”

                                Fenwa:
                                “Live. Love. And help someone else one day.”

                                The story spread.

                                Villager:
                                “He didn’t just save a life — he gave hope.”

                                Even Baba Adeoye nodded in respect.

                                That evening, Ṣadé looked at Fenwa with awe.

                                Ṣadé:
                                “You’re not just a good man.

                                You’re a blessing.”

                                Fenwa:
                                “No.

                                I’m just a man who remembers what it’s like to need help.

                                And now, I can give it.”
                                `,
    },
    {
      title: "Chapter 58: The First Trial of Faith",
      content: `
                                    A drought hit Ìsẹ̀lú. Crops withered, wells dried, and hunger spread.

                                    The villagers panicked.

                                    Villager:
                                    “We need rain! We need help!”

                                    Fenwa organized a prayer session at the shrine.

                                    But he didn’t stop there.

                                    He used his connections to bring in water trucks and drought-resistant seeds.

                                    He taught farmers irrigation techniques and started a food bank.

                                    Some accused him of showing off.

                                    But the children ate.

                                    The elderly drank.

                                    And hope returned.

                                    Ṣadé watched him day after day, giving without rest.

                                    One night, she found him asleep on a bench, exhausted.

                                    She covered him with a cloth and whispered:

                                    Ṣadé:
                                    “Olúwa, protect this man.

                                    He gives everything.

                                    And asks for nothing.”

                                    And in that moment, her love deepened.

                                    Not because he was strong.

                                    But because he kept giving — even when he was tired.
                                    `,
    },
    {
      title: "Chapter 59: The First Public Stand",
      content: `
                                        During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

                                        He pulled Fenwa aside.

                                        Politician:
                                        “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

                                        Fenwa:
                                        “No.”

                                        Politician:
                                        “No? Do you know who I am?”

                                        Fenwa:
                                        “I know who I am. And I won’t sell my people’s future for cash.”

                                        He stood before the crowd and spoke:

                                        Fenwa:
                                        “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

                                        The crowd agreed.

                                        The politician left in fury.

                                        That night, Ṣadé held Fenwa’s hand.

                                        Ṣadé:
                                        “You could have taken the money. For us.”

                                        Fenwa:
                                        “And lose our integrity? No price is worth that.”

                                        She kissed him.

                                        And in that kiss, she saw the future.

                                        A life of courage.

                                        Of truth.

                                        Of love that stood tall — no matter the storm.
                                        `,
    },
    {
      title: "Chapter 60: The First Blessing",
      content: `
                                            The Oba called Fenwa to the palace.

                                            Oba:
                                            “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                                            It was a high honor.

                                            Fenwa bowed.

                                            Fenwa:
                                            “I accept not for title, but for service.”

                                            That night, the village celebrated.

                                            Drummers played.

                                            Women danced.

                                            Children sang:

                                            “Fenwa the humble, Fenwa the strong!”

                                            Ṣadé watched, her heart full.

                                            Her parents, once ashamed, now smiled with pride.

                                            Mama Oladipo:
                                            “He is not poor.

                                            He is rich in character.”

                                            And as the firelight danced, Fenwa pulled Ṣadé close.

                                            Fenwa:
                                            “This is my wealth.

                                            You.

                                            This village.

                                            This life.”

                                            No mansion.

                                            No private jet.

                                            Just love.

                                            And purpose.

                                            And a future brighter than gold.
                                            `,
    },
    {
      title: "Chapter 61: The First Doubt",
      content: `
                                                The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

                                                Fenwa was the first to act.

                                                Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

                                                Villager (amazed):
                                                “Look at him! He’s working like a slave, and he’s not even from here.”

                                                Ṣadé watched from under a dry awning, her heart stirred.

                                                Ṣadé (to herself):
                                                “Most men would have run. But he stayed. He helped.”

                                                Later, as the rain slowed, she walked up to him.

                                                Ṣadé:
                                                “Thank you. You didn’t have to do all this.”

                                                Fenwa (wiping mud from his face):
                                                “If I see a problem, I fix it. That’s who I am.”

                                                She smiled — the first real smile she’d given anyone in weeks.

                                                And Fenwa felt it: the first spark of something greater than wealth… greater than power.

                                                Hope.
                                                `,
    },
    {
      title: "Chapter 62: The First Promise",
      content: `
                                                    One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

                                                    She sat beside him, silent for a moment.

                                                    Ṣadé:
                                                    “You’ve done so much for everyone. Why don’t you take care of yourself?”

                                                    Fenwa (softly):
                                                    “I’m not used to being cared for. I’ve always been the one helping others.”

                                                    Ṣadé looked at him, then reached out and touched his hand.

                                                    Ṣadé:
                                                    “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

                                                    Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

                                                    Fenwa:
                                                    “And I want to be yours. Not just today, but forever.”

                                                    They sat in silence, holding hands, as the stars began to appear.

                                                    For the first time, they both knew — this was not just love.

                                                    It was destiny.
                                                    `,
    },
    {
      title: "Chapter 63: The First Kiss",
      content: `
                                                        The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

                                                        Fenwa and Ṣadé danced side by side, their hands clasped tightly.

                                                        As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

                                                        Fenwa looked into her eyes, his voice soft.

                                                        Fenwa:
                                                        “May I?”

                                                        Ṣadé nodded, her heart pounding.

                                                        He leaned forward, and their lips met.

                                                        Soft.

                                                        Sweet.

                                                        Sacred.

                                                        The world disappeared.

                                                        When they pulled away, the crowd cheered.

                                                        But they only saw each other.

                                                        And in that kiss, a future was born.

                                                        Not built on money.

                                                        But on love.
                                                        `,
    },
    {
      title: "Chapter 64: The First Storm",
      content: `
                                                            After the kiss, the village split.

                                                            Some celebrated.

                                                            Others mocked.

                                                            Elder:
                                                            “Ṣadé is too fine for a poor man like him.”

                                                            Young Woman:
                                                            “He’ll never give her the life she deserves.”

                                                            But Fenwa and Ṣadé stood firm.

                                                            One afternoon, a group of youths confronted Fenwa.

                                                            Youth:
                                                            “You think you can marry Ṣadé? You have nothing!”

                                                            Fenwa (calmly):
                                                            “I have love. And that’s more than you’ll ever understand.”

                                                            They laughed, but he walked away.

                                                            That night, Ṣadé cried.

                                                            Ṣadé:
                                                            “I hate that they hurt you.”

                                                            Fenwa cupped her face gently.

                                                            Fenwa:
                                                            “They don’t hurt me. But if they hurt you, that’s different.”

                                                            Ṣadé:
                                                            “Then prove them wrong. Not with money. With character.”

                                                            Fenwa smiled.

                                                            Fenwa:
                                                            “That’s exactly what I’ll do.”
                                                            `,
    },
    {
      title: "Chapter 65: The First Proposal",
      content: `
                                                                Fenwa didn’t propose with a ring.

                                                                He proposed with action.

                                                                He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                                                                On opening day, he stood before the village.

                                                                Fenwa:
                                                                “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                                                                He turned to Ṣadé.

                                                                Fenwa:
                                                                “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                                                                The crowd held its breath.

                                                                Ṣadé stepped forward, tears in her eyes.

                                                                Ṣadé:
                                                                “Yes, Fenwa. A thousand times, yes.”

                                                                The crowd erupted in cheers.

                                                                No ring.

                                                                No grand speech.

                                                                Just love.

                                                                Pure.

                                                                Real.

                                                                And forever.
                                                                `,
    },
    {
      title: "Chapter 66: The First Doubt from Family",
      content: `
        Ṣadé’s parents were not happy.

        Baba Adeoye (angrily):
        “You’re marrying a man with no car, no house, no job! What kind of future is that?”

        Mama Oladipo:
        “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

        Ṣadé (firmly):
        “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

        Her parents fell silent.

        But the next day, Baba called Fenwa.

        Baba Adeoye:
        “If you marry my daughter, you must provide for her.”

        Fenwa:
        “I will. Not with money I show, but with love I live.”

        Baba scoffed.

        But Fenwa didn’t argue.

        Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

        When Baba saw his wife earning real income, his heart softened.

        And for the first time, he looked at Fenwa — not as a beggar — but as a son.
        `,
    },
    {
      title: "Chapter 67: The First Wedding Plan",
      content: `
            The couple began planning their traditional wedding.

            Ṣadé’s friends helped with designs, fabrics, and beadwork.

            But one problem remained — money.

            Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

            Ṣadé worried.

            Ṣadé:
            “We can’t afford a big wedding.”

            Fenwa:
            “We don’t need big. We need true.”

            He wrote a letter to a friend in Lagos.

            A week later, a truck arrived — filled with food, drinks, and gifts.

            Fenwa had quietly arranged everything.

            But he told no one.

            On the day of the wedding announcement, the Oba smiled.

            Oba:
            “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

            And as the drums played, Fenwa whispered to Ṣadé:

            Fenwa:
            “One day, the world will know who I am.

            But today, I’m just your husband-to-be.”
            `,
    },
    {
      title: "Chapter 68: The First Enemy Revealed",
      content: `
                Kunle wasn’t done.

                He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                Kunle:
                “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                Akinwale (smirking):
                “Love is fragile. All it takes is one lie to break it.”

                They began spreading rumors.

                Rumor 1:
                “Fenwa stole money from a church.”

                Rumor 2:
                “He’s married to three women already.”

                Ṣadé heard them.

                But she laughed.

                Ṣadé:
                “I know his heart. And his heart doesn’t lie.”

                Fenwa said nothing.

                But that night, he prayed:

                Fenwa:
                “Olúwa, silence the liars. Let truth shine.”

                And slowly, the rumors faded.

                Because love, when rooted in truth, cannot be shaken by lies.
                `,
    },
    {
      title: "Chapter 69: The First Miracle",
      content: `
                    A child in the village fell critically ill. The nearest hospital was hours away, and the family had no money.

                    Fenwa acted.

                    He called an ambulance, paid for treatment, and stayed with the family through the night.

                    The child survived.

                    The parents wept at his feet.

                    Father:
                    “You saved our son. How can we repay you?”

                    Fenwa:
                    “Live. Love. And help someone else one day.”

                    The story spread.

                    Villager:
                    “He didn’t just save a life — he gave hope.”

                    Even Baba Adeoye nodded in respect.

                    That evening, Ṣadé looked at Fenwa with awe.

                    Ṣadé:
                    “You’re not just a good man.

                    You’re a blessing.”

                    Fenwa:
                    “No.

                    I’m just a man who remembers what it’s like to need help.

                    And now, I can give it.”
                    `,
    },
    {
      title: "Chapter 70: The First Trial of Faith",
      content: `
                        A drought hit Ìsẹ̀lú. Crops withered, wells dried, and hunger spread.

                        The villagers panicked.

                        Villager:
                        “We need rain! We need help!”

                        Fenwa organized a prayer session at the shrine.

                        But he didn’t stop there.

                        He used his connections to bring in water trucks and drought-resistant seeds.

                        He taught farmers irrigation techniques and started a food bank.

                        Some accused him of showing off.

                        But the children ate.

                        The elderly drank.

                        And hope returned.

                        Ṣadé watched him day after day, giving without rest.

                        One night, she found him asleep on a bench, exhausted.

                        She covered him with a cloth and whispered:

                        Ṣadé:
                        “Olúwa, protect this man.

                        He gives everything.

                        And asks for nothing.”

                        And in that moment, her love deepened.

                        Not because he was strong.

                        But because he kept giving — even when he was tired.
                        `,
    },
    {
      title: "Chapter 71: The First Public Stand",
      content: `
                            During a town meeting, a politician offered money to the village — but only if they supported his corrupt agenda.

                            He pulled Fenwa aside.

                            Politician:
                            “You’re respected here. Tell them to accept the deal. I’ll make it worth your while.”

                            Fenwa:
                            “No.”

                            Politician:
                            “No? Do you know who I am?”

                            Fenwa:
                            “I know who I am. And I won’t sell my people’s future for cash.”

                            He stood before the crowd and spoke:

                            Fenwa:
                            “They offer money today. But tomorrow, they’ll take our land, our freedom, our dignity. Say no. Stand tall. We are not for sale.”

                            The crowd agreed.

                            The politician left in fury.

                            That night, Ṣadé held Fenwa’s hand.

                            Ṣadé:
                            “You could have taken the money. For us.”

                            Fenwa:
                            “And lose our integrity? No price is worth that.”

                            She kissed him.

                            And in that kiss, she saw the future.

                            A life of courage.

                            Of truth.

                            Of love that stood tall — no matter the storm.
                            `,
    },
    {
      title: "Chapter 72: The First Blessing",
      content: `
                                The Oba called Fenwa to the palace.

                                Oba:
                                “You have served this village with humility and strength. I hereby name you *Olori Ise* — Leader of Works.”

                                It was a high honor.

                                Fenwa bowed.

                                Fenwa:
                                “I accept not for title, but for service.”

                                That night, the village celebrated.

                                Drummers played.

                                Women danced.

                                Children sang:

                                “Fenwa the humble, Fenwa the strong!”

                                Ṣadé watched, her heart full.

                                Her parents, once ashamed, now smiled with pride.

                                Mama Oladipo:
                                “He is not poor.

                                He is rich in character.”

                                And as the firelight danced, Fenwa pulled Ṣadé close.

                                Fenwa:
                                “This is my wealth.

                                You.

                                This village.

                                This life.”

                                No mansion.

                                No private jet.

                                Just love.

                                And purpose.

                                And a future brighter than gold.
                                `,
    },
    {
      title: "Chapter 73: The First Doubt",
      content: `
                                    The next morning, a sudden downpour turned the village paths into rivers of mud. The market was in chaos—canopies collapsed, goods floated away, and traders screamed in frustration.

                                    Fenwa was the first to act.

                                    Without hesitation, he rolled up his sleeves, grabbed a shovel, and began digging drainage channels to redirect the water. He helped elderly women carry their goods to safety and propped up collapsing stalls with wooden poles.

                                    Villager (amazed):
                                    “Look at him! He’s working like a slave, and he’s not even from here.”

                                    Ṣadé watched from under a dry awning, her heart stirred.

                                    Ṣadé (to herself):
                                    “Most men would have run. But he stayed. He helped.”

                                    Later, as the rain slowed, she walked up to him.

                                    Ṣadé:
                                    “Thank you. You didn’t have to do all this.”

                                    Fenwa (wiping mud from his face):
                                    “If I see a problem, I fix it. That’s who I am.”

                                    She smiled — the first real smile she’d given anyone in weeks.

                                    And Fenwa felt it: the first spark of something greater than wealth… greater than power.

                                    Hope.
                                    `,
    },
    {
      title: "Chapter 74: The First Promise",
      content: `
                                        One evening, as the sun set behind the hills, Ṣadé found Fenwa sitting alone under the mango tree. His face was calm, but his eyes held a quiet sadness.

                                        She sat beside him, silent for a moment.

                                        Ṣadé:
                                        “You’ve done so much for everyone. Why don’t you take care of yourself?”

                                        Fenwa (softly):
                                        “I’m not used to being cared for. I’ve always been the one helping others.”

                                        Ṣadé looked at him, then reached out and touched his hand.

                                        Ṣadé:
                                        “But now, I want to help you. Not because you’re rich or powerful… but because you’re mine.”

                                        Fenwa’s breath caught. He turned to her, his eyes filled with emotion.

                                        Fenwa:
                                        “And I want to be yours. Not just today, but forever.”

                                        They sat in silence, holding hands, as the stars began to appear.

                                        For the first time, they both knew — this was not just love.

                                        It was destiny.
                                        `,
    },
    {
      title: "Chapter 75: The First Kiss",
      content: `
                                            The village festival was in full swing. Drummers played, dancers twisted, and children ran through the square laughing.

                                            Fenwa and Ṣadé danced side by side, their hands clasped tightly.

                                            As the music slowed, they stopped beneath a tree, its leaves glowing in the firelight.

                                            Fenwa looked into her eyes, his voice soft.

                                            Fenwa:
                                            “May I?”

                                            Ṣadé nodded, her heart pounding.

                                            He leaned forward, and their lips met.

                                            Soft.

                                            Sweet.

                                            Sacred.

                                            The world disappeared.

                                            When they pulled away, the crowd cheered.

                                            But they only saw each other.

                                            And in that kiss, a future was born.

                                            Not built on money.

                                            But on love.
                                            `,
    },
    {
      title: "Chapter 76: The First Storm",
      content: `
                                                After the kiss, the village split.

                                                Some celebrated.

                                                Others mocked.

                                                Elder:
                                                “Ṣadé is too fine for a poor man like him.”

                                                Young Woman:
                                                “He’ll never give her the life she deserves.”

                                                But Fenwa and Ṣadé stood firm.

                                                One afternoon, a group of youths confronted Fenwa.

                                                Youth:
                                                “You think you can marry Ṣadé? You have nothing!”

                                                Fenwa (calmly):
                                                “I have love. And that’s more than you’ll ever understand.”

                                                They laughed, but he walked away.

                                                That night, Ṣadé cried.

                                                Ṣadé:
                                                “I hate that they hurt you.”

                                                Fenwa cupped her face gently.

                                                Fenwa:
                                                “They don’t hurt me. But if they hurt you, that’s different.”

                                                Ṣadé:
                                                “Then prove them wrong. Not with money. With character.”

                                                Fenwa smiled.

                                                Fenwa:
                                                “That’s exactly what I’ll do.”
                                                `,
    },
    {
      title: "Chapter 77: The First Proposal",
      content: `
                                                    Fenwa didn’t propose with a ring.

                                                    He proposed with action.

                                                    He built a new school — with solar panels, books, and desks — all funded by his secret wealth.

                                                    On opening day, he stood before the village.

                                                    Fenwa:
                                                    “This is for our children. For their future. And for the woman who believed in me when no one else did.”

                                                    He turned to Ṣadé.

                                                    Fenwa:
                                                    “Ṣadé, will you build a life with me? Not as a billionaire, not as a poor man — but as partners in love, service, and purpose?”

                                                    The crowd held its breath.

                                                    Ṣadé stepped forward, tears in her eyes.

                                                    Ṣadé:
                                                    “Yes, Fenwa. A thousand times, yes.”

                                                    The crowd erupted in cheers.

                                                    No ring.

                                                    No grand speech.

                                                    Just love.

                                                    Pure.

                                                    Real.

                                                    And forever.
                                                    `,
    },
    {
      title: "Chapter 78: The First Doubt from Family",
      content: `
                                                        Ṣadé’s parents were not happy.

                                                        Baba Adeoye (angrily):
                                                        “You’re marrying a man with no car, no house, no job! What kind of future is that?”

                                                        Mama Oladipo:
                                                        “We wanted better for you, Ṣadé. A rich man, a chief’s son.”

                                                        Ṣadé (firmly):
                                                        “He is better. He has a heart of gold. And he sees me — not as a prize, but as a partner.”

                                                        Her parents fell silent.

                                                        But the next day, Baba called Fenwa.

                                                        Baba Adeoye:
                                                        “If you marry my daughter, you must provide for her.”

                                                        Fenwa:
                                                        “I will. Not with money I show, but with love I live.”

                                                        Baba scoffed.

                                                        But Fenwa didn’t argue.

                                                        Instead, he started a women’s cooperative, giving Ṣadé’s mother and other women seed funding to grow and sell crops.

                                                        When Baba saw his wife earning real income, his heart softened.

                                                        And for the first time, he looked at Fenwa — not as a beggar — but as a son.
                                                        `,
    },
    {
      title: "Chapter 79: The First Wedding Plan",
      content: `
                                                            The couple began planning their traditional wedding.

                                                            Ṣadé’s friends helped with designs, fabrics, and beadwork.

                                                            But one problem remained — money.

                                                            Weddings in Ìsẹ̀lú were expensive: kola nuts, palm wine, goats, musicians, and gifts for the family.

                                                            Ṣadé worried.

                                                            Ṣadé:
                                                            “We can’t afford a big wedding.”

                                                            Fenwa:
                                                            “We don’t need big. We need true.”

                                                            He wrote a letter to a friend in Lagos.

                                                            A week later, a truck arrived — filled with food, drinks, and gifts.

                                                            Fenwa had quietly arranged everything.

                                                            But he told no one.

                                                            On the day of the wedding announcement, the Oba smiled.

                                                            Oba:
                                                            “This wedding will be simple, but full of joy. Because love doesn’t need luxury — it needs honesty.”

                                                            And as the drums played, Fenwa whispered to Ṣadé:

                                                            Fenwa:
                                                            “One day, the world will know who I am.

                                                            But today, I’m just your husband-to-be.”
                                                            `,
    },
    {
      title: "Chapter 80: The First Enemy Revealed",
      content: `
                                                                Kunle wasn’t done.

                                                                He visited a neighboring village and met Akinwale, a man with a grudge against successful people.

                                                                Kunle:
                                                                “There’s a man in Ìsẹ̀lú — Fenwa. He’s winning everyone’s heart. I need him gone.”

                                                                Akinwale (smirking):
                                                                “Love is fragile. All it takes is one lie to break it.”

                                                                They began spreading rumors.

                                                                Rumor 1:
                                                                “Fenwa stole money from a church.”

                                                                Rumor 2:
                                                                “He’s married to three women already.”

                                                                Ṣadé heard them.

                                                                But she laughed.

                                                                Ṣadé:
                                                                “I know his heart. And his heart doesn’t lie.”

                                                                Fenwa said nothing.

                                                                But that night, he prayed:

                                                                Fenwa:
                                                                “Olúwa, silence the liars. Let truth shine.”

                                                                And slowly, the rumors faded.

                                                                Because love, when rooted in truth, cannot be shaken by lies.
                                                                `,
    },
    {
      title: "Chapter 81: The Wedding Morning",
      content: `
          The first rays of the sun broke over Ìsẹ̀lú, painting the village in gold. The cool breeze carried the aroma of fried akara and steaming moin-moin, prepared for the celebration. Drummers were already awake, testing their talking drums with beats that echoed excitement across the land.

          Ṣadé sat on a low stool while the village women dressed her. Her hair was braided into neat cornrows, adorned with cowries and coral beads. She wore a wrapper of deep wine color, with golden embroidery that shimmered in the sunlight.

          Her little niece, Ifeoluwa, clapped her hands excitedly.
          Ifeoluwa:
          “Aunty Ṣadé, you look like a queen!”

          Ṣadé smiled nervously, her palms sweaty. Mama Oladipo entered, carrying a calabash filled with palm wine.

          Mama Oladipo (softly):
          “My daughter, today is the day. Forget all your fears. Remember, a woman’s beauty is not just in her clothes, but in her patience and strength.”

          Ṣadé nodded, swallowing her emotions.

          At the same time, Fenwa was being prepared by his friends and some elders. He wore a pristine white agbada, richly embroidered, but simple enough to still pass as a humble groom. A cap sat proudly on his head, and his walking staff leaned by the wall.

          His friend Taye teased him.
          Taye:
          “Fenwa, you’re shaking like a leaf. You’ve faced investors and boardrooms in secret, yet one woman’s beauty has broken your strength.”

          Fenwa laughed nervously.
          Fenwa:
          “Taye, this is bigger than any business deal. This is life itself.”

          Baba Alade placed his hand on Fenwa’s shoulder.
          Baba Alade:
          “My son, today is proof that humility brings greatness. Walk proudly, for Ṣadé is yours.”

          By mid-morning, the village square was alive. Colorful canopies were set up, drums thundered, and singers’ voices rang out. Children ran about with excitement, chasing each other between the rows of chairs.

          As tradition demanded, Ṣadé was led in first. Her face was covered with a veil of light aso-oke. She walked slowly, her steps graceful, supported by her bridesmaids.

          Soon after, Fenwa entered the square, his steps firm but humble. The drums grew louder, women ululated, and men clapped.

          The master of ceremony, an elder with a booming voice, stepped forward.
          Elder:
          “Today, the family of Ajibade meets the family of Mama Oladipo. They are no longer two, but one. Shall we proceed?”

          Both families agreed with cheers.

          Fenwa was asked to prostrate fully before Ṣadé’s family, in Yoruba tradition. Without hesitation, he lay flat on the ground, a gesture of respect. Gasps filled the air as people whispered:
          “See this man, so humble… even though he has nothing.”

          Ṣadé’s brothers laughed quietly, shaking their heads, still thinking him poor. But Ṣadé’s eyes filled with tears.

          As Fenwa rose, Ṣadé was guided forward. She was handed a cup of palm wine and told to find her husband among the crowd. With trembling hands, she walked slowly, searching. When her eyes met Fenwa’s, she smiled and placed the cup in his hands.

          The crowd erupted in cheers.
          Ṣadé (softly, to Fenwa):
          “I choose you.”
          Fenwa held her hand tightly.
          Fenwa (whispering):
          “Forever, Ṣadé.”

          The drums rolled louder, dancers filled the square, and the celebration began in full glory.

          But deep inside, Fenwa knew—this was only the beginning. Very soon, his true identity would be revealed, and the entire village would witness a transformation like never before.
          `,
    },
    {
      title: "Chapter 82: The Revelation Begins",
      content: `
              The wedding was in full swing. The drummers played so hard their palms glistened with sweat. Women in colorful gele twisted their waists to the rhythm, while children danced in the dust, laughing. Smoke from the suya stand rose into the sky, mixing with the aroma of jollof rice and pounded yam.

              Fenwa and Ṣadé sat side by side under the richly decorated canopy, surrounded by friends and well-wishers. Ṣadé sneaked shy glances at her new husband, still unable to believe that this was real.

              Not far from the canopy, some villagers began murmuring among themselves. A man dressed in a crisp suit, with a shiny car key dangling in his hand, had just arrived. He parked a black Mercedes SUV at the edge of the square—an unusual sight in their quiet town.

              Villager 1 (whispering):
              “Ah-ah, who drove that kind of big car to our village?”

              Villager 2:
              “I don’t know o, but he said he came for the groom.”

              As the man walked confidently toward the ceremony, people’s eyes followed him. He wasn’t alone—two other men in matching corporate attire followed closely, carrying leather briefcases.

              Just as the MC was about to call on the elders to give their blessings, the man in the suit stepped forward, bowed briefly, and cleared his throat.

              Man in Suit:
              “Good afternoon, elders. Forgive the interruption. My name is Mr. Adeyemi. I represent Ajibade Holdings International. I have urgent matters that require Mr. Fenwa Ajibade’s attention.”

              The entire square went silent. The drummers froze mid-beat, the singers stopped, and even the children paused their play.

              MC (frowning):
              “Ajibade Holdings? Who are you talking about?”

              The man in the suit turned toward Fenwa, who sat calmly beside Ṣadé.

              Man in Suit:
              “I’m talking about him. Our chairman… Fenwa Ajibade.”

              Gasps filled the air. Ṣadé’s brothers exchanged confused looks, Mama Oladipo’s mouth dropped open, and the villagers began whispering louder.

              Ṣadé (in a trembling voice):
              “Fenwa… what is he saying? Chairman? Ajibade Holdings?”

              Fenwa took a deep breath. He held her hand gently, his eyes steady and calm.
              Fenwa (softly):
              “Ṣadé… it is true. I am Fenwa Ajibade, the head of Ajibade Holdings. I came here not as a billionaire, but as a man searching for true love.”

              Ṣadé’s heart skipped. She could hardly breathe. Her mind flashed back to all the moments she had doubted him, insulted him, and thought him beneath her. Tears welled in her eyes.

              The entire village erupted in mixed reactions.
              Villager 3:
              “Ehn! So this man we thought was just a common laborer is a billionaire?”
              Villager 4:
              “Ha! See how some people insulted him! God forgive us.”

              Mama Oladipo covered her face with her wrapper, trembling with shame and relief. Ṣadé’s brothers looked as though the ground should swallow them up.

              But amidst the shock, the drummers suddenly resumed—this time with more vigor. The singers broke into praises:
              “Omo Ajibade, omo ola! The son of wealth, the son of honor!”

              The wedding square was now on fire with excitement.

              Fenwa stood, raising his hand for silence.
              Fenwa:
              “I hid my identity not to deceive, but to test the heart. Wealth can buy comfort, but it cannot buy love. Today, I have found love—not because of riches, but because Ṣadé chose me when she thought I had nothing.”
              He turned to Ṣadé, lifting her hand before the whole village.
              Fenwa (softly but firmly):
              “Now the world will know—this woman is my crown.”

              The crowd cheered, some dancing, some clapping. Ṣadé, overwhelmed, leaned into him with tears streaming down her face.

              For the first time, she saw not just the man she married—but the destiny he carried.
              `,
    },
    {
      title: "Chapter 83: Ṣadé’s Family Reacts",
      content: `
                  The celebration was still alive with music and dancing, but in one corner of the compound, tension simmered. Ṣadé’s family sat together, their faces heavy with shame.

                  Her brothers, Chike and Emeka, exchanged nervous glances. Mama Oladipo twisted her wrapper repeatedly, unable to look anyone in the eye.

                  Mama Oladipo (in a low, broken voice):
                  “So… so he is Ajibade. The same name I’ve heard on the radio, in the markets, even on TV adverts. And I… I called him a useless man. I disrespected him in front of others.”

                  She buried her face in her palms, tears soaking her cheeks.

                  Chike (whispering):
                  “Mama, what have we done? We treated him like a nobody. We even mocked him.”

                  Emeka (clenching his fists):
                  “We failed our sister. We almost cost her happiness.”

                  Their voices carried the weight of regret, echoing against the joyous music in the background.

                  As if sensing their sorrow, Fenwa walked over, still holding Ṣadé’s hand. His demeanor was calm, almost fatherly.

                  Fenwa (softly):
                  “Mama Oladipo… Chike… Emeka… please, lift up your heads.”

                  They hesitated, but Ṣadé nudged them gently. Slowly, Mama Oladipo raised her eyes to him, tears still flowing.

                  Fenwa quickly bent down, lifting her up before she could kneel further.
                  Fenwa (gently):
                  “No, Mama. You are my mother now. I hold no grudge. What matters is today—this union, this family.”

                  Chike and Emeka exchanged guilty looks, then bowed their heads.
                  Chike:
                  “Brother… we treated you like dirt. We thought you were after our sister for selfish reasons.”
                  Emeka:
                  “We mocked your hard work. But today, we see the truth. Please, forgive us.”

                  Fenwa placed a hand on each of their shoulders, smiling.
                  Fenwa:
                  “You are my brothers now. Let’s leave the past behind and build a better tomorrow. What matters most is that Ṣadé is happy.”

                  Ṣadé, who had been silent, finally spoke. Her voice shook, but her words were firm.
                  Ṣadé:
                  “Mama, brothers… do you now see why I chose him? He never raised his voice, never repaid evil for evil. Even when we doubted him, he proved his worth through patience, not pride.”
                  She looked at Fenwa with deep affection.
                  Ṣadé (softly):
                  “And now, I understand. Love truly is blind to wealth, but open to character.”

                  Fenwa squeezed her hand, and Ṣadé leaned against him.

                  News of the reconciliation spread quickly. Soon, the drummers began chanting praises, not just for Fenwa, but for Ṣadé’s family too. Elders came forward, blessing the union and praising Fenwa’s humility.

                  The once-ashamed faces of Ṣadé’s family softened as villagers embraced them, whispering words of encouragement:
                  “Ehn, God has changed your story.”
                  “From today, poverty don end for una house.”

                  The reconciliation sealed the bond—not just between Fenwa and Ṣadé, but between their families and the entire community.
                  `,
    },
    {
      title: "Chapter 90: The Counterattack",
      content: `
          The morning sun streamed through the glass windows of Fenwa’s Lagos office. But instead of despair, determination filled the air. Fenwa had finally seen the faces of those waging war against him.

          The War Room

          Fenwa gathered Kunle, his legal adviser Barrister Adeyemi, and his head of security, Musa.
          Fenwa (calm but firm):
          “Gentlemen, I now know the enemies trying to break us. Dayo and Chief Olowolabi. But we will not fight with anger. We will fight with strategy.”

          Musa leaned forward.
          Musa:
          “Sir, I have men who can take care of them quietly.”

          Fenwa raised a hand.
          Fenwa:
          “No. This battle must end in truth, not blood. If we expose them with evidence, the world will see them for who they really are.”

          Kunle nodded in agreement.
          Kunle:
          “Then let us play smarter. They think they’ve cornered you, but we’ll set the bait and make them walk into their own trap.”

          Ṣadé’s Suggestion

          At home later that evening, Ṣadé noticed Fenwa deep in thought again. She walked up to him, her wrapper tied loosely as she prepared dinner.
          Ṣadé:
          “Why don’t you give them what they want—at least on the surface? Pretend to lose, and they’ll grow careless. When pride blinds them, that’s when you strike.”

          Fenwa smiled, admiring his wife’s wisdom.
          Fenwa:
          “That is why I call you my crown. You see beyond battles. You see victory in patience.”

          He kissed her forehead, grateful for her strength.

          The Bait

          Two weeks later, a headline spread across Lagos newspapers:
          📌 “Fenwa Ajibade’s Company Faces Massive Debt – Investors Pulling Out.”

          It was a carefully planted story, orchestrated by Fenwa himself. He wanted Dayo and Olowolabi to believe they had finally won.

          At a private club, Dayo read the paper and laughed.
          Dayo (boasting):
          “It worked! Fenwa is finished. Soon, everything he owns will be ours.”

          Chief Olowolabi (grinning):
          “Then let us make our final move. We’ll strike his Kwara farmlands and collapse his last standing empire.”

          What they didn’t know was that every word they spoke was being recorded. Fenwa had planted a spy within their circle—the same loyal man who had sent him the first video.

          The Revelation

          Back at his office, Fenwa watched the live feed of their meeting. His chest rose and fell slowly, but his eyes burned with resolve.
          Fenwa (to himself):
          “Patience has an end. Now, it is time.”
          He picked up his phone and called Barrister Adeyemi.
          Fenwa:
          “Prepare the documents. Tomorrow, we move to expose them publicly. Their reign of deceit ends now.”
          `,
    },
    {
      title: "Chapter 91: The Trap Springs",
      content: `
              The next morning, Fenwa summoned Dayo and Chief Olowolabi to a press conference under the guise of surrender.

              Fenwa (on live TV):
              “I admit… my company is in trouble. I can no longer sustain the Kwara agricultural project.”

              The crowd murmured. Reporters leaned in. Dayo and Olowolabi exchanged triumphant smirks.

              Then, Fenwa paused.
              Fenwa:
              “But before I step down, I have one final statement.”

              He nodded to his team.

              A screen lit up behind him — playing the **recorded conversation** from the warehouse.
              Dayo’s voice rang out:
              Dayo (on video):
              “I know every weakness in Fenwa’s empire. Together, we can bring him down.”
              Chief Olowolabi:
              “Excellent. And when Fenwa falls, we’ll take everything he owns.”

              Gasps filled the hall. Cameras flashed. Dayo turned pale.

              Fenwa (calmly):
              “This is not a surrender. It is a revelation. These men conspired to destroy me—not for justice, but for greed.”

              Security moved in. Dayo and Olowolabi were arrested on live television.

              Ṣadé watched from the audience, tears in her eyes.

              That night, Fenwa held her close.
              Fenwa:
              “The truth is my weapon. And it never fails.”
              `,
    },
    {
      title: "Chapter 92: The Fall of Dayo",
      content: `
                  The sun rose gently over Lagos, but for Dayo, the light brought no peace. News of the scandal had spread like wildfire. Social media buzzed with hashtags:
                  🔹 #FenwaWins
                  🔹 #OlowolabiExposed
                  🔹 #IntegrityOverGreed

                  Dayo’s Desperation

                  Dayo sat in his office, his hands trembling as he scrolled through the news.
                  Headline: “Dayo Adeyemi, Once a Rising Star, Now Branded as Corporate Saboteur.”

                  His secretary entered cautiously.
                  Secretary:
                  “Sir… investors are pulling out. The bank has frozen the accounts. They…”
                  Before she could finish, Dayo slammed his fist on the table.
                  Dayo (shouting):
                  “Get out! Leave me alone!”

                  He buried his face in his palms, realizing the empire he built through deceit was crumbling before his eyes.

                  Fenwa’s Calm Strength

                  At Ajibade Holdings, Fenwa was in a meeting with his board.
                  Board Member:
                  “Sir, your boldness has restored the confidence of investors. The stock is already rising.”
                  Fenwa:
                  “Good. But let us not mock those who have fallen. Instead, let us strengthen our integrity so no shadow can touch us again.”
                  The board nodded, deeply moved by his humility.

                  Dayo Confronts Fenwa

                  Later that evening, Dayo barged into Fenwa’s compound unannounced. His clothes were rough, his face tired. Security tried to stop him, but Fenwa signaled them to let him through.
                  Dayo (pleading):
                  “Fenwa… please. You’ve won. You’ve destroyed me. Just… don’t push further. Don’t take my family’s house. Don’t let them suffer.”
                  Fenwa looked at him steadily.
                  Fenwa:
                  “I never wanted your destruction, Dayo. You chose this path. But for the sake of your family, I will not touch what belongs to them. Let this be your last chance to learn.”

                  Dayo fell to his knees, tears streaming.
                  Dayo:
                  “I should have listened… I should have worked hard like you instead of trying to steal.”

                  Ṣadé’s Gentle Intervention

                  Ṣadé walked in quietly and placed a hand on Fenwa’s shoulder.
                  Ṣadé:
                  “Sometimes mercy teaches louder than punishment.”

                  Fenwa nodded, helping Dayo to his feet.
                  Fenwa:
                  “Go, Dayo. Rebuild your life the right way. And remember, betrayal will always bring downfall.”

                  The Public Verdict

                  By the next morning, while Fenwa was praised as a man of integrity, Dayo became the symbol of greed. Universities, newspapers, and business groups began to use his case as a warning.

                  For every door that opened to Fenwa, ten slammed shut against Dayo. His fall was complete.

                  But while Dayo licked his wounds, Chief Olowolabi was not ready to bow quietly. He still had influence in political circles, and he planned to strike again.
                  `,
    },
    {
      title: "Chapter 93: Storm of Accusations",
      content: `
                      The announcement came like lightning on a clear day.
                      📺 On every TV screen, bold headlines flashed:
                      “EFCC INVESTIGATES BILLIONAIRE FENWA AJIBADE FOR MONEY LAUNDERING AND TAX EVASION.”

                      Crowds gathered in streets and markets, whispering.

                      The Shockwave

                      At the family house, Ṣadé stared at the television in disbelief.
                      Ṣadé (whispering, trembling):
                      “This can’t be true… Fenwa?”

                      Her mother-in-law, Mama Ranti, folded her hands tightly, muttering prayers.
                      Mama Ranti:
                      “Ọlọrun má jẹ o! My son is not a thief. I raised him with integrity.”

                      But outside, neighbors already started gossiping.
                      Neighbor 1:
                      “I said it! Nobody gets that rich without dirty deals.”
                      Neighbor 2:
                      “Ehn, but you can’t be sure. This man helped build a hospital for us. Why will he steal?”

                      Political Conspiracy

                      Meanwhile, in his mansion, Chief Olowolabi poured himself palm wine, a wicked smile stretching across his lips.
                      Chief Olowolabi (to his associates):
                      “Finally, we have him where we want him. Once the people doubt him, his empire will collapse. His good name will turn to dust.”

                      His men nodded, already plotting how to push the story further into the media.

                      Fenwa’s Resolve

                      That evening, Fenwa returned home, his face calm though his heart was heavy. Ṣadé rushed to him.
                      Ṣadé:
                      “Tell me it’s not true! Tell me they are lying.”

                      Fenwa cupped her face gently.
                      Fenwa:
                      “My love, listen. I have never stolen a kobo in my life. But when you stand tall in a corrupt world, enemies will try to pull you down.”

                      Ṣadé’s tears fell, but she nodded, holding onto his words.
                      Ṣadé:
                      “Then we will fight this together.”

                      Fenwa kissed her forehead, grateful for her strength.

                      The City’s Division

                      By nightfall, Lagos was buzzing with arguments. Some believed he was innocent; others wanted him jailed. His name trended worldwide.

                      But one thing was certain—Fenwa’s life would never be the same again.
                      Fenwa (softly, to himself):
                      “This battle is bigger than money. This is about my honor… and my family’s future.”
                      `,
    },
    {
      title: "Chapter 94: The Court of Public Opinion",
      content: `
                          The accusations against Fenwa spread like wildfire. Newspapers screamed his name in bold letters, radio stations debated his legacy, and social media became a battlefield.

                          The Online War

                          Twitter, Facebook, Instagram—every platform boiled with arguments.
                          Comment 1:
                          “I knew it! These billionaires are all the same—corrupt!”
                          Comment 2:
                          “Don’t believe the lies. Fenwa built schools, hospitals, and jobs. He’s not like the others.”
                          Comment 3:
                          “EFCC should investigate thoroughly. If he’s guilty, let him face the law.”

                          The noise was deafening, but one thing was clear: people were watching closely.

                          The Press Conference

                          Fenwa called for a press conference at the Civic Centre in Lagos. The hall was packed with journalists, cameras blinking non-stop. Ṣadé sat in the front row, her eyes steady with encouragement.

                          Fenwa walked to the podium in a simple navy blue agbada, his posture strong, his face calm.
                          Fenwa:
                          “My fellow Nigerians, for many years, I have invested my heart, sweat, and wealth into this country. Today, my enemies try to paint me as a criminal. I say this before God and man: I have no offshore accounts, no stolen money, no skeletons. Every kobo I own was earned with hard work and transparency.”
                          He raised a file in his hand.
                          Fenwa:
                          “Here are audited records of my businesses, certified by international accountants. My doors remain open for investigation. But I will not bow to falsehood.”

                          The journalists murmured, impressed. Some clapped lightly, though others remained skeptical.

                          Chief Olowolabi’s Counterattack

                          Watching from his mansion, Chief Olowolabi clenched his jaw.
                          Chief Olowolabi (muttering):
                          “You think a speech will save you? This is politics, not church.”
                          He immediately made calls, ensuring that certain media outlets continued publishing damaging headlines.

                          Ṣadé’s Bold Move

                          That night, Ṣadé went live on her Instagram, something she rarely did. Her followers flooded in, curious.
                          Ṣadé (voice steady, emotional):
                          “I know many of you doubt my husband. But I live with him, I see him every day. He is not a thief. He is a man who wakes at dawn, works until midnight, and still finds time to care for his people. If you destroy men like Fenwa, who will you have left? Corrupt leaders who steal from you without shame? Think carefully.”
                          The live session went viral. Women praised her courage, men admired her loyalty, and slowly, public opinion began to shift back in Fenwa’s favor.

                          The EFCC Verdict

                          Two weeks later, the Economic and Financial Crimes Commission (EFCC) released their findings.
                          📄 Official Statement:
                          “After thorough investigation, we found no evidence of money laundering or tax evasion against Mr. Fenwa Ajibade. All allegations are baseless.”

                          The news broke across the country like thunder. Crowds cheered. Supporters flooded the streets, chanting:
                          “Fenwa! Fenwa! Our hero! Our pride!”

                          Ṣadé cried tears of relief as Fenwa hugged her tightly.
                          Fenwa (whispering):
                          “You gave me strength, my love. Without you, I would have broken.”

                          Chief Olowolabi’s Silence

                          Meanwhile, Chief Olowolabi sat in his lounge, sipping palm wine slowly. His allies had deserted him, ashamed of the failed plan.
                          Chief Olowolabi (softly, almost to himself):
                          “The boy has won the people. And a man with the people on his side… is unstoppable.”
                          For the first time, the old lion felt truly defeated.
                          `,
    },
    {
      title: "Chapter 95: The Court Summons",
      content: `
                              The next morning, the air in Lagos was tense. Sirens wailed as EFCC operatives stormed the gates of Fenwa Ajibade’s estate.

                              Uniformed men entered with stern faces, flashing a document.
                              Lead EFCC Officer:
                              “Mr. Fenwa Ajibade, you are hereby summoned to appear before the Federal High Court on charges of money laundering, tax evasion, and financial misconduct.”

                              Ṣadé gasped, clutching Fenwa’s arm.
                              Ṣadé (pleading):
                              “This is madness! He is innocent.”

                              Fenwa (calmly):
                              “Let them do their worst. The truth will vindicate me.”

                              The Family’s Fear

                              Back in Ìsẹ̀lú, Mama Ranti heard the news from neighbors. Some mocked, others sympathized. She stood tall, though her eyes glistened.
                              Mama Ranti:
                              “Ọmọ mi kò le ṣe bẹẹ. The whole world will know soon. My son’s hands are clean.”

                              Public Reaction

                              Markets buzzed with debates.
                              Some traders shouted:
                              Trader 1:
                              “Let them jail all these so-called billionaires!”
                              Trader 2:
                              “No o, Fenwa is different. He built schools, hospitals, gave scholarships. Can a thief do that?”

                              The city was divided.

                              Fenwa’s Private Struggle

                              That night, Fenwa sat in his study, staring at the summons letter. The empire he built brick by brick was now under siege.
                              Ṣadé entered quietly, placing her hand on his shoulder.
                              Ṣadé:
                              “I believe in you. No matter what happens, I’ll stand by you.”
                              Fenwa smiled faintly, though his eyes betrayed the storm inside.
                              Fenwa:
                              “Thank you, my love. This battle… will test everything we stand for.”

                              He folded the letter, placed it neatly on the table, and whispered a prayer in Yoruba.
                              `,
    },
    {
      title: "Chapter 96: The Trial Begins",
      content: `
                                  The Federal High Court in Abuja was packed to the brim. Reporters, lawyers, and curious citizens filled the hall. Cameras zoomed in as Fenwa Ajibade entered—calm, dressed in a simple white agbada.

                                  The prosecution opened with bold claims:
                                  Prosecutor:
                                  “Mr. Ajibade used offshore companies to hide over ₦20 billion in undeclared income. He is a threat to Nigeria’s economy.”

                                  The crowd murmured.

                                  But Fenwa’s lawyer, Barrister Adeyemi, stood with confidence.
                                  Barrister Adeyemi:
                                  “Your Honor, my client is not a criminal. He is a man who built an empire from nothing, gave back to the poor, and married for love, not money. The prosecution has no real evidence—only rumors and lies.”

                                  The judge ordered both sides to present proof.

                                  Day by day, Fenwa’s financial records were examined. International auditors testified. Bank statements were verified.

                                  And every single document proved one thing: **Fenwa was clean**.

                                  Even the judge admitted:
                                  Judge:
                                  “This is one of the most transparent financial records I’ve ever seen.”

                                  Public opinion shifted completely. Protesters outside the court held signs:
                                  🔹 “Free Fenwa!”
                                  🔹 “Integrity Over Lies!”
                                  🔹 “He Built Schools, Not Vaults!”

                                  Fenwa remained calm throughout. He held Ṣadé’s hand every morning as they entered court.

                                  And every night, he whispered:
                                  Fenwa:
                                  “This is not just about me. It’s about truth winning in a world that rewards corruption.”
                                  `,
    },
    {
      title: "Chapter 97: The Final Witness",
      content: `
                                      On the seventh day of the trial, the court was silent. The prosecution had failed to prove a single charge. Their last hope: a surprise witness.

                                      The judge:
                                      “Please state your name and relationship to the defendant.”

                                      The man stood—tall, nervous, wearing a worn-out shirt.
                                      Man:
                                      “My name is Tunde Ojo. I used to work at Ajibade Holdings as a junior accountant.”

                                      The crowd leaned in.

                                      Prosecutor (smirking):
                                      “Mr. Ojo, did you see Mr. Fenwa approve any illegal transactions?”

                                      Tunde Ojo:
                                      “No.”

                                      Gasps filled the hall.

                                      Prosecutor (stunned):
                                      “What? Then why are you here?”

                                      Tunde Ojo:
                                      “I am here to tell the truth. I was paid by Chief Olowolabi to lie. They promised me ₦5 million to say Fenwa ordered me to hide money. But I couldn’t do it. My conscience won’t let me.”

                                      He pulled out a recording device.
                                      Tunde Ojo:
                                      “And I recorded every conversation with them.”

                                      The audio played:
                                      Chief Olowolabi:
                                      “Say Fenwa told you to transfer money to Dubai. Say it, and the money is yours.”

                                      The courtroom exploded in shock.

                                      The judge slammed his gavel.
                                      Judge:
                                      “This court finds the prosecution’s case to be built on fraud and conspiracy. The charges against Mr. Fenwa Ajibade are hereby dismissed!”

                                      The crowd erupted in cheers.

                                      Fenwa stood, tears in his eyes. He looked at Ṣadé, who smiled through her tears.

                                      Justice had finally spoken.
                                      `,
    },
    {
      title: "Chapter 98: The Redemption of the Village",
      content: `
                                          After the trial, Fenwa didn’t return to Lagos. He went straight to Ìsẹ̀lú.

                                          The village welcomed him with ululations, drumming, and dancing. The Oba declared a day of celebration.

                                          But Fenwa had one mission.

                                          He gathered the youth of the village in the square.
                                          Fenwa:
                                          “Young men and women, I was once like you—poor, forgotten, but full of dreams. Today, I announce the *Fenwa & Ṣadé Youth Empowerment Fund*.”

                                          He unveiled a plaque:
                                          “₦100 million to train 500 youths in tech, farming, fashion, and business. No bribes. No favoritism. Just opportunity.”

                                          The youth cheered.

                                          He turned to the elders.
                                          Fenwa:
                                          “And for our fathers and mothers, we will build a modern clinic with solar power, clean water, and free medicine.”

                                          The elders wept.

                                          Ṣadé stepped forward, holding a child’s hand.
                                          Ṣadé:
                                          “This is not just charity. This is legacy. And it starts with you.”

                                          That night, the entire village feasted under the stars.

                                          No more poverty.

                                          No more shame.

                                          Only pride.

                                          And peace.
                                          `,
    },
    {
      title: "Chapter 99: The Birth of a Legacy",
      content: `
                                              One year later, the village of Ìsẹ̀lú was transformed.

                                              Solar panels powered homes. A new school stood tall with computers and books. The clinic served over 20 villages. Young people returned from the city to start businesses.

                                              And in the center of it all stood a statue—not of Fenwa, but of **Fenwa and Ṣadé, hand in hand**, with the inscription:

                                              > “They came not with pride, but with love.  
                                              > Not with noise, but with service.  
                                              > This is how legacies are built.”

                                              Fenwa and Ṣadé stood before it on a quiet morning, holding each other.

                                              Ṣadé:
                                              “We did it, my love.”

                                              Fenwa:
                                              “No. *We* did it. You, me, and this village.”

                                              She smiled, resting her head on his shoulder.

                                              That afternoon, the Oba called them.
                                              Oba:
                                              “I have never seen such love. I declare today: Fenwa and Ṣadé are now *Oba ati Iya Ilu* — King and Queen of the Land.”

                                              The drums rolled. The people chanted.

                                              And as the sun set, Fenwa whispered:
                                              Fenwa:
                                              “This is not the end. It is only the beginning of our legacy.”
                                              `,
    },
    {
      title: "Chapter 100: Forever Begins",
      content: `
                                                  Ten years later, the village of Ìsẹ̀lú was no longer a village—it was a thriving town.

                                                  The school had become a college. The clinic was now a full hospital. Young entrepreneurs from across Nigeria came to learn.

                                                  And in a quiet compound, under the same mango tree where it all began, sat an older Fenwa and Ṣadé.

                                                  Their hair was gray, their faces lined with time, but their love was as strong as ever.

                                                  Their children played nearby—three bright souls who carried their names and values.

                                                  A young journalist approached.
                                                  Journalist:
                                                  “Mr. and Mrs. Ajibade, after all you’ve done, what is the secret to your success?”

                                                  Fenwa looked at Ṣadé, then smiled.
                                                  Fenwa:
                                                  “Love. Not the kind that shouts, but the kind that serves. The kind that stays.”

                                                  Ṣadé took his hand.
                                                  Ṣadé:
                                                  “We didn’t start with wealth. We started with truth. And truth builds empires.”

                                                  That night, as the stars lit the sky, they sat together, wrapped in a single cloth.

                                                  Fenwa:
                                                  “Do you remember our first night here?”

                                                  Ṣadé:
                                                  “How could I forget? You were just a man on a bicycle.”

                                                  Fenwa laughed.
                                                  Fenwa:
                                                  “And you were the woman who changed my life.”

                                                  They held each other as the drums played in the distance.

                                                  Not because of fame.

                                                  Not because of money.

                                                  But because of love.

                                                  And in that moment, they knew—
                                                  **Forever had already begun.**
                                                  `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-amber-400">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Fenwa & Ṣadé
          </h1>
          <p className="text-xl text-amber-600 font-semibold">
            A Legacy of Love
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Chapter List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Chapters
              </h2>
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {chapters.map((chapter, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentChapter(index)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium ${
                      currentChapter === index
                        ? "bg-amber-500 text-white shadow-md"
                        : "text-gray-700 hover:bg-amber-100 hover:text-amber-800"
                    }`}
                  >
                    {chapter.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
              {/* Chapter Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-2 border-amber-200 pb-4">
                {chapters[currentChapter].title}
              </h2>

              {/* Chapter Content */}
              <div className="prose prose-lg max-w-none whitespace-pre-line text-gray-700 leading-relaxed">
                {chapters[currentChapter].content}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() =>
                    setCurrentChapter(Math.max(0, currentChapter - 1))
                  }
                  disabled={currentChapter === 0}
                  className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-all duration-200"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  <span>Previous</span>
                </button>

                <span className="text-sm text-gray-500 font-medium">
                  Chapter {currentChapter + 1} of {chapters.length}
                </span>

                <button
                  onClick={() =>
                    setCurrentChapter(
                      Math.min(chapters.length - 1, currentChapter + 1)
                    )
                  }
                  disabled={currentChapter === chapters.length - 1}
                  className="flex items-center space-x-2 px-6 py-3 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all duration-200"
                >
                  <span>Next</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>
                  {Math.round(((currentChapter + 1) / chapters.length) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-amber-500 h-3 rounded-full transition-all duration-500"
                  style={{
                    width: `${((currentChapter + 1) / chapters.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg">© 2025 Fenwa & Ṣadé: A Legacy of Love</p>
          <p className="text-gray-400 mt-2">
            Chapters 1–12 of a 100-chapter epic novel
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
