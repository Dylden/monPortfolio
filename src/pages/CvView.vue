<template>
  <div id="cvWrapper">
    <h1 class="cvBigTitle">Mon CV</h1>

    <!-- SECTION CV PERSO A GAUCHE -->
    <section id="sectionCVperso">
      <div class="cvContainers">
        <!-- INFOS PERSONNELLES -->
        <h2 class="cvTitles">Informations personnelles</h2>
        <p><strong>Nom :</strong> {{ cvData.basics.name }}</p>
        <p><strong>Email :</strong> {{ cvData.basics.email }}</p>
        <p><strong>Téléphone :</strong> {{ cvData.basics.phone }}</p>
        <p>
          <strong>Localisation :</strong> {{ cvData.basics.location.city }},
          {{ cvData.basics.location.region }}
        </p>
        <p><strong>Résumé :</strong> {{ cvData.basics.summary }}</p>
      </div>
      <!-- LANGUES -->
      <div class="cvContainers">
        <h2 class="cvTitles">Langues</h2>
        <ul>
          <li v-for="lang in cvData.languages" :key="lang.language">
            <h3>{{ lang.language }}</h3>
            <p>Niveau : {{ lang.fluency }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- SECTION CV A DROITE -->
    <!-- COMPETENCES -->
    <section id="sectionCV">
      <div class="cvContainers">
        <h2 class="cvTitles">Compétences</h2>
        <ul>
          <li v-for="skill in cvData.skills" :key="skill.name">
            <h3>{{ skill.name }}</h3>
            <p>Niveau : {{ skill.level }}</p>
            <p>Compétences : {{ skill.keywords.join(", ") }}</p>
          </li>
        </ul>
      </div>
      <!-- EXPERIENCES PROFESSIONNELLES -->
      <div class="cvContainers">
        <h2 class="cvTitles">Expériences professionnelles</h2>
        <ul>
          <li v-for="job in cvData.work" :key="job.name">
            <h3>{{ job.position }} chez {{ job.name }}</h3>
            <p>{{ job.startDate }} - {{ job.endDate }}</p>
            <p>{{ job.summary }}</p>
          </li>
        </ul>
      </div>
      <!-- BENEVOLAT -->
      <div class="cvContainers">
        <h2 class="cvTitles">Bénévolat</h2>
        <ul>
          <li v-for="vol in cvData.volunteer" :key="vol.organization">
            <h3>{{ vol.position }} chez {{ vol.organization }}</h3>
            <p>{{ vol.startDate }} - {{ vol.endDate }}</p>
            <p>{{ vol.summary }}</p>
          </li>
        </ul>
      </div>
      <!-- EDUCATION -->
      <div class="cvContainers">
        <h2 class="cvTitles">Éducation</h2>
        <ul>
          <li v-for="edu in cvData.education" :key="edu.institution">
            <h3>
              {{ edu.studyType }} en {{ edu.area }} à {{ edu.institution }}
            </h3>
            <p>{{ edu.startDate }} - {{ edu.endDate }}</p>
          </li>
        </ul>
      </div>
      <!-- CENTRES D'INTERET -->
      <div class="cvContainers">
        <h2 class="cvTitles">Centres d'intérêt</h2>
        <ul>
          <li v-for="interest in cvData.interests" :key="interest.name">
            <h3>{{ interest.name }}</h3>
            <p>{{ interest.keywords.join(", ") }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import cvData from "../cv.json";
</script>
