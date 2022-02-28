interface HintEntry {
    value: string;
    context: { [key: string]: string; };
    position: { [key: string]: string; };
    description?: { [key: string]: string; };
}

export const CSS_HINTS: HintEntry[] = [
    // Common
    {
        value: '.list-label',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Liste à points',
            en: 'Bullet list'
        },
        description: {
            fr: 'Libellé',
            en: 'Label'
        },
    },
    {
        value: '.list-value',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Liste à points',
            en: 'Bullet list'
        },
        description: {
            fr: 'Valeur',
            en: 'Value'
        },
    },
    {
        value: '.elements-list',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Liste d\'éléments',
            en: 'Elements list'
        },
    },
    {
        value: '.info-header',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'En-tête',
            en: 'Header'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        },
    },
    {
        value: '.header-title',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'En-tête',
            en: 'Header'
        },
        description: {
            fr: 'Titre',
            en: 'Title'
        },
    },
    {
        value: '.header-body',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'En-tête',
            en: 'Header'
        },
        description: {
            fr: 'Texte',
            en: 'Text'
        },
    },
    {
        value: '.block-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
    },
    {
        value: '.block-title',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Titre',
            en: 'Title'
        }
    },
    {
        value: '.block-body',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.controller-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Responsable de traitement',
            en: 'Data controller'
        }
    },
    {
        value: '.information-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Informations additionnelles',
            en: 'Additional information'
        }
    },
    {
        value: '.sensitive-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Données sensibles',
            en: 'Sensitive data'
        }
    },
    {
        value: '.third-parties-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Bloc',
            en: 'Block'
        },
        description: {
            fr: 'Tierces-parties',
            en: 'Third parties'
        }
    },
    {
        value: '.item-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.item-body',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.processing-data',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Traitement - Bloc des données',
            en: 'Processing - Data block'
        }
    },
    {
        value: '.processing-retention',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Traitement - Bloc de durée de conservation',
            en: 'Processing - Retention block'
        }
    },
    {
        value: '.processing-usage',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Traitement - Bloc de finalité',
            en: 'Processing - Usage block'
        }
    },
    {
        value: '.processing-legal-bases',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Traitement - Bloc de bases légales',
            en: 'Processing - Legal bases block'
        }
    },
    {
        value: '.processing-purposes',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Traitement - Bloc de catégories de finalité',
            en: 'Processing - Purpose categories block'
        }
    },
    {
        value: '.privacy-policy-container',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Politique de confidentialité',
            en: 'Privacy policy'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.privacy-policy',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Politique de confidentialité',
            en: 'Privacy policy'
        },
        description: {
            fr: 'Lien',
            en: 'Link'
        }
    },
    {
        value: '.element',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.element-header',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'En-tête',
            en: 'Header'
        }
    },
    {
        value: '.element-title',
        context: {
            fr: 'Formulaire/Reçu',
            en: 'Form/Receipt'
        },
        position: {
            fr: 'Élément',
            en: 'Item'
        },
        description: {
            fr: 'Titre',
            en: 'Title'
        }
    },
    {
        value: '.logo-container',
        context: {
            fr: 'Formulaire/Reçu/Email',
            en: 'Form/Receipt/Email'
        },
        position: {
            fr: 'Logo',
            en: 'Logo'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.logo',
        context: {
            fr: 'Formulaire/Reçu/Email',
            en: 'Form/Receipt/Email'
        },
        position: {
            fr: 'Logo',
            en: 'Logo'
        },
        description: {
            fr: 'Image',
            en: 'Image'
        }
    },
    // Forms
    {
        value: '.consent-form',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.left',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Corps',
            en: 'Body'
        },
        description: {
            fr: 'Partie gauche',
            en: 'Left side'
        }
    },
    {
        value: '.right',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Corps',
            en: 'Body'
        },
        description: {
            fr: 'Partie droite',
            en: 'Right side'
        }
    },
    {
        value: '.switch',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Interrupteur',
            en: 'Switch'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.switch-slider',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Interrupteur',
            en: 'Switch'
        },
        description: {
            fr: 'Bouton',
            en: 'Button'
        }
    },
    {
        value: '.switch-text',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Interrupteur',
            en: 'Switch'
        },
        description: {
            fr: 'Texte',
            en: 'Text'
        }
    },
    {
        value: '.switch-text.accept',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Interrupteur',
            en: 'Switch'
        },
        description: {
            fr: 'Texte affirmatif (droite)',
            en: 'Affirmative text (right)'
        }
    },
    {
        value: '.switch-text.refuse',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Interrupteur',
            en: 'Switch'
        },
        description: {
            fr: 'Texte négatif (gauche)',
            en: 'Negative text (left)'
        }
    },
    {
        value: '.info-footer',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.conditions-response',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'CGU',
            en: 'Conditions'
        },
        description: {
            fr: 'Conteneur de l\'interrupteur',
            en: 'Switch container'
        }
    },
    {
        value: '.footer-body',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.accept-all-container',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Tout accepter - Conteneur',
            en: 'Accept all - Container'
        }
    },
    {
        value: '.accept-all-container-text',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Tout accepter - Texte',
            en: 'Accept all - Text'
        }
    },
    {
        value: '.submit-container',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Bouton d\'envoi - Conteneur',
            en: 'Submit button - Container'
        }
    },
    {
        value: '.submit-button',
        context: {
            fr: 'Formulaire',
            en: 'Form'
        },
        position: {
            fr: 'Pied',
            en: 'Footer'
        },
        description: {
            fr: 'Bouton d\'envoi - Bouton',
            en: 'Submit button - Button'
        }
    },
    // Receipts
    {
        value: '.receipt',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.processing-response',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'Traitement',
            en: 'Processing'
        },
        description: {
            fr: 'Réponse',
            en: 'Response'
        }
    },
    {
        value: '.processing-response.accepted',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'Traitement',
            en: 'Processing'
        },
        description: {
            fr: 'Réponse - Acceptée',
            en: 'Response - Accepter'
        }
    },
    {
        value: '.processing-response.refused',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'Traitement',
            en: 'Processing'
        },
        description: {
            fr: 'Réponse - Refusée',
            en: 'Response - Refused'
        }
    },
    {
        value: '.qr-code-container',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'QR code',
            en: 'QR code'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.qr-code',
        context: {
            fr: 'Reçu',
            en: 'Receipt'
        },
        position: {
            fr: 'QR code',
            en: 'QR code'
        },
        description: {
            fr: 'Image',
            en: 'Image'
        }
    },
    // Emails
    {
        value: '.email-content',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.email-title',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Titre',
            en: 'Title'
        }
    },
    {
        value: '.email-body',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Corps',
            en: 'Body'
        }
    },
    {
        value: '.email-button-container',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Bouton',
            en: 'Button'
        },
        description: {
            fr: 'Conteneur',
            en: 'Container'
        }
    },
    {
        value: '.email-button',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Bouton',
            en: 'Button'
        }
    },
    {
        value: '.email-button-content',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Bouton',
            en: 'Button'
        },
        description: {
            fr: 'Texte',
            en: 'Text'
        }
    },
    {
        value: '.email-footer',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Pied de page',
            en: 'Footer'
        }
    },
    {
        value: '.email-signature',
        context: {
            fr: 'Email',
            en: 'Email'
        },
        position: {
            fr: 'Signature',
            en: 'Signature'
        }
    },
];
