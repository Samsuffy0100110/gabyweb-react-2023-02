import { Footer } from "@components/layouts/footer/Footer";
import { Nav } from "@components/layouts/nav/Nav";
import style from "./legals.module.scss";
import React from "react";

export function Legals() {
  const siteName = import.meta.env.VITE_SITE_NAME;
  return (
    <>
      <Nav />
      <div className={style.legal__container}>
        <div className={style.legal__title}>
          <h1>Mentions légales</h1>
        </div>
        <div className={style.legal__content}>
          <p>
            Conformément aux dispositions de l’article 6 de la loi n° 2004-575
            du 21 juin 2004 pour la confiance dans l’économie numérique, il est
            précisé aux utilisateurs du site
            {siteName} l’identité des différents intervenants dans le cadre de
            sa réalisation et de son suivi :
          </p>
          <p>
            <strong>Éditeur du site</strong>
          </p>
          <p>
            Le site {siteName} est édité par la société {siteName}, SAS au
            capital de 1000€, dont le siège social est situé au 1 rue de la
            Paix, 75000 Paris, immatriculée au RCS de Paris sous le numéro 123
            456 789, représentée par son Président.
          </p>
          <p>
            <strong>Hébergeur</strong>
          </p>
          <p>
            Ce site est hébergé par O2SWITCH 222-224 Boulevard Gustave Flaubert
            63000 Clermont-Ferrand SARL o2switch au capital de 7500€ RCS :
            Clermont-Ferrand – SIRET : 510 909 80700016 – TVA : FR35510909807 La
            marque o2switch est déposée INPI sous le numéro 09 3 645 729.
          </p>
          <p>
            <strong>Crédits</strong>
          </p>
          <p>
            Les mentions légales ont étés générées sur le site Générateur de
            mentions légales.
          </p>
          <p>
            <strong>Propriété intellectuelle</strong>
          </p>
          <p>
            Tous les éléments du site {siteName} sont et restent la propriété
            intellectuelle et exclusive de
            {siteName} ou de ses partenaires. A ce titre, toute reproduction,
            représentation, modification, publication, adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé
            utilisé, est interdite, sauf autorisation écrite préalable de{" "}
            {siteName}.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des
            éléments qu’il contient sera considérée comme constitutive d’une
            contrefaçon et poursuivie conformément aux dispositions des articles
            L335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
          <p>
            <strong>Données personnelles</strong>
          </p>
          <p>
            Conformément à la loi n°78-17 du 6 janvier 1978 relative à
            l’informatique, aux fichiers et aux libertés, ce site a fait l’objet
            d’une déclaration auprès de la Commission Nationale de
            l’Informatique et des Libertés (www.cnil.fr).
          </p>
          <p>
            Conformément à la loi « Informatique et Libertés » du 6 janvier 1978
            modifiée en 2004, vous disposez d’un droit d’accès, de rectification
            et d’opposition aux données vous concernant, en vous adressant à{" "}
            {siteName} par email à l’adresse suivante : contact@{siteName}.com.
          </p>
          <p>
            <strong>Liens hypertextes</strong>
          </p>
          <p>
            Le site {siteName} peut contenir des liens hypertextes vers d’autres
            sites présents sur le réseau Internet. {siteName} ne dispose d’aucun
            moyen pour contrôler les sites en connexion avec ses sites Internet.{" "}
            {siteName} ne répond pas de la disponibilité technique, de la
            qualité, de la fiabilité, de la rapidité et de l’exactitude des
            informations, contenus, produits, services ou publicités disponibles
            sur ou à partir de ces sites ou sources externes, et ne saurait être
            tenue pour responsable de tout dommage, de quelque nature que ce
            soit, résultant du contenu de ces sites ou sources externes, et
            notamment des informations, produits ou services qu’ils proposent,
            ou de tout usage qui peut être fait de ces éléments. Les risques
            liés à cette utilisation incombent pleinement à l’internaute, qui
            doit se conformer à leurs conditions d’utilisation.
          </p>
          <p>
            Les utilisateurs, les abonnés et les visiteurs des sites Internet de{" "}
            {siteName} ne peuvent mettre en place un hyperlien en direction de
            ce site sans l’autorisation expresse et préalable de {siteName}.
          </p>
          <p>
            Dans l’hypothèse où un utilisateur ou visiteur souhaiterait mettre
            en place un hyperlien en direction d’un des sites Internet de{" "}
            {siteName}, il lui appartiendra d’adresser un email accessible sur
            le site afin de formuler sa demande de mise en place d’un hyperlien.{" "}
            {siteName} se réserve le droit d’accepter ou de refuser un hyperlien
            sans avoir à en justifier sa décision.
          </p>
          <p>
            <strong>Responsabilité</strong>
          </p>
          <p>
            Les informations et/ou documents figurant sur ce site et/ou
            accessibles par ce site proviennent de sources considérées comme
            étant fiables.
          </p>
          <p>
            Toutefois, ces informations et/ou documents sont susceptibles de
            contenir des inexactitudes techniques et des erreurs typographiques.
          </p>
          <p>
            Les informations et/ou documents disponibles sur ce site et/ou
            accessibles par ce site peuvent être modifiées à tout moment, et
            peuvent avoir fait l’objet d’une mise à jour. En particulier, ils
            peuvent avoir fait l’objet d’une mise à jour entre le moment de leur
            téléchargement et celui où l’utilisateur en prend connaissance.
          </p>
          <p>
            {siteName} ne peut être tenue pour responsable de l’utilisation
            faite de ces informations et/ou documents, de leur inexactitude et
            de l’absence de mise à jour.
          </p>
          <p>
            Les liens hypertextes mis en place dans le cadre du présent site
            Internet en direction d’autres ressources présentes sur le réseau
            Internet ne sauraient engager la responsabilité de {siteName}.
          </p>
          <p>
            <strong>Cookies</strong>
          </p>
          <p>
            Vous pouvez à tout moment faire le choix d’exprimer et de modifier
            vos souhaits en matière de cookies. Pour cela, vous pouvez
            paramétrer votre navigateur internet afin de refuser l’installation
            des cookies ou de supprimer les cookies installés dans votre
            ordinateur.
          </p>
          <p>
            Pour en savoir plus sur les cookies, vous pouvez consulter le site
            de la CNIL : www.cnil.fr.
          </p>
          <p>
            <strong>Loi applicable et attribution de juridiction</strong>
          </p>
          <p>
            Tout litige en relation avec l’utilisation du site {siteName} est
            soumis au droit français. Il est fait attribution exclusive de
            juridiction aux tribunaux compétents de Paris.
          </p>
          <p>
            <strong>Les principales lois concernées</strong>
          </p>
          <p>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi
            n°2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et
            aux libertés.
          </p>
          <p>
            Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie
            numérique.
          </p>
          <p>
            <strong>Lexique</strong>
          </p>
          <p>
            Utilisateur : Internaute se connectant, utilisant le site susnommé.
          </p>
          <p>
            Informations personnelles : « les informations qui permettent, sous
            quelque forme que ce soit, directement ou non, l’identification des
            personnes physiques auxquelles elles s’appliquent » (article 4 de la
            loi n°78-17 du 6 janvier 1978).
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
