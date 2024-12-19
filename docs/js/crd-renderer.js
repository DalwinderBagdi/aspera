function setRequired(schema) {
    var required = schema.required || [];
    required.forEach(property => {
        if (!!schema.properties && !!schema.properties[property]) {
            schema.properties[property].isRequired = true;
        }
    });
}

const renderCrd = (name, schema) => {
    setRequired(schema);
    return `
              <div class="crd-info">
                <div class="crd-name">${name}</div>
                <div class="crd-version">${schema.xml.name}/${schema.xml.namespace}</div>
              </div>
              <div class="crd-description">${marked.parse(schema.description||'')}</div>
              <div class="properties-caption">Properties:</div>
              ${renderProperties(schema.properties)}
            `;
};

const renderProperty = (name, schema, depth = 0) => {
  const toggleId = `toggle-${name}-${Math.random().toString(36).substr(2, 9)}`;

  var nameSection = !name ? '' : `
    <td class="prop-name" style="padding-left: ${depth * 20}px;">
      ${name || ''}
    </td>
  `;

  var typeSection = `
    <td class="prop-type-info" style="padding-left: ${depth * 20}px;">
      <p class="prop-type">${schema.type || ''}</p>
      ${!schema.enum ? '' : `<p class="prop-enum">Enum: ${schema.enum.map(v => `"${v}"`).join(', ')}</p>`}
      ${!schema.isRequired ? '' : '<p class="prop-required">required</p>'}
      ${!schema.default ? '' : `<p class="prop-default">Default: ${JSON.stringify(schema.default)}</p>`}
    </td>
  `;

  var descriptionSection = `
    <td class="prop-description" style="padding-left: ${depth * 20}px;">
      ${marked.parse(schema.description || '')}
    </td>
  `;

  var propInfo = `
    <tr class="prop-info">
      ${nameSection}
      ${typeSection}
      ${descriptionSection}
    </tr>
  `;

  // Check if the property is spec or status, if yes, render without toggle
  if (name === 'spec' || name === 'status') {
    return propInfo + `
      <tr>
        <td colspan="3">
          <div class="section-content" style="padding-left: ${depth * 20}px;">
            ${renderProperties(schema.properties || {}, depth + 1)}
          </div>
        </td>
      </tr>
    `;
  }

  switch (schema.type) {
    case 'object':
      setRequired(schema);

      const hasProperties = schema.properties && Object.keys(schema.properties).length > 0;
      const allowsAdditionalProperties = schema.additionalProperties;

      if (hasProperties || allowsAdditionalProperties) {
        return propInfo + `
          <tr>
            <td colspan="3">
              <button class="toggle-button" data-target="${toggleId}" style="padding-left: ${depth * 20}px;">
                <span class="toggle-arrow">&#9660;</span> Toggle Properties
              </button>
              <div id="${toggleId}" class="collapsible-content" style="display:none; padding-left: ${depth * 20}px;">
                ${allowsAdditionalProperties
                  ? `<p class="prop-additionalProperties">Allows additional properties</p>`
                  : ''}
                ${hasProperties ? renderProperties(schema.properties, depth + 1) : ''}
              </div>
            </td>
          </tr>
        `;
      }
      return propInfo;

    case 'array':
      return propInfo + `
        <tr>
          <td colspan="3">
            <button class="toggle-button" data-target="${toggleId}" style="padding-left: ${depth * 20}px;">Toggle Items</button>
            <div id="${toggleId}" class="collapsible-content" style="display:none; padding-left: ${depth * 20}px;">
              ${renderProperties({ '': schema.items || {} }, depth + 1)}
            </div>
          </td>
        </tr>
      `;

    default:
      return propInfo;
  }
};

const renderProperties = (properties, depth = 0) => {
  return `<table class="schema">` + Object.keys(properties).map(key => renderProperty(key, properties[key], depth)).join(' ') + `</table>`;
};


//const renderProperty = (name, schema, depth = 0) => {
//  const toggleId = `toggle-${name}-${Math.random().toString(36).substr(2, 9)}`;
//
//  var nameSection = !name ? '' : `
//    <td class="prop-name" style="padding-left: ${depth * 20}px;">
//      ${name || ''}
//    </td>
//  `;
//
//  var typeSection = `
//    <td class="prop-type-info" style="padding-left: ${depth * 20}px;">
//      <p class="prop-type">${schema.type || ''}</p>
//      ${!schema.enum ? '' : `<p class="prop-enum">Enum: ${schema.enum.map(v => `"${v}"`).join(', ')}</p>`}
//      ${!schema.isRequired ? '' : '<p class="prop-required">required</p>'}
//      ${!schema.default ? '' : `<p class="prop-default">Default: ${JSON.stringify(schema.default)}</p>`}
//    </td>
//  `;
//
//  var descriptionSection = `
//    <td class="prop-description" style="padding-left: ${depth * 20}px;">
//      ${marked.parse(schema.description || '')}
//    </td>
//  `;
//
//  var propInfo = `
//    <tr class="prop-info">
//      ${nameSection}
//      ${typeSection}
//      ${descriptionSection}
//    </tr>
//  `;
//
//  // Check if the property is spec or status, if yes, render without toggle
//  if (name === 'spec' || name === 'status') {
//    return propInfo + `
//      <tr>
//        <td colspan="3">
//          <div class="section-content" style="padding-left: ${depth * 20}px;">
//            ${renderProperties(schema.properties || {}, depth + 1)}
//          </div>
//        </td>
//      </tr>
//    `;
//  }
//
//  switch (schema.type) {
//    case 'object':
//      setRequired(schema);
//
//      const hasProperties = schema.properties && Object.keys(schema.properties).length > 0;
//      const allowsAdditionalProperties = schema.additionalProperties;
//
//      if (hasProperties || allowsAdditionalProperties) {
//        return propInfo + `
//          <tr>
//            <td colspan="3">
//              <button class="toggle-button" data-target="${toggleId}" style="padding-left: ${depth * 20}px;">
//                <span class="toggle-arrow">&#9660;</span> Toggle Properties
//              </button>
//              <div id="${toggleId}" class="collapsible-content" style="display:none; padding-left: ${depth * 20}px;">
//                ${allowsAdditionalProperties
//                  ? `<p class="prop-additionalProperties">Allows additional properties</p>`
//                  : ''}
//                ${hasProperties ? renderProperties(schema.properties, depth + 1) : ''}
//              </div>
//            </td>
//          </tr>
//        `;
//      }
//      return propInfo;
//
//    case 'array':
//      return propInfo + `
//        <tr>
//          <td colspan="3">
//            <button class="toggle-button" data-target="${toggleId}" style="padding-left: ${depth * 20}px;">Toggle Items</button>
//            <div id="${toggleId}" class="collapsible-content" style="display:none; padding-left: ${depth * 20}px;">
//              ${renderProperties({ '': schema.items || {} }, depth + 1)}
//            </div>
//          </td>
//        </tr>
//      `;
//
//    default:
//      return propInfo;
//  }
//};
//
//const renderProperties = (properties, depth = 0) => {
//  return `<table class="schema">` + Object.keys(properties).map(key => renderProperty(key, properties[key], depth)).join(' ') + `</table>`;
//};



$(document).ready(function () {
  $(".crd").each(function () {
    var crd = this.getAttribute("data");
    $(this).html(renderCrd(crd, defs[crd]));
  });

  if (window.location.hash) {
    var id = window.location.hash;
    if ($(id).length > 0) {
      $("html").animate({ scrollTop: parseInt($(id).offset().top) }, 0);
    }
  }

  // Toggle collapsible content
  $(document).on('click', '.toggle-button', function () {
    var target = $(this).data('target');
    $(`#${target}`).toggle();
  });
});