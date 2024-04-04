public with sharing class AccountContactsController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactsForAccount(String accountId) {
    return [
      SELECT Id, Name, Email, Title, Phone
      FROM Contact
      WHERE AccountId = :accountId
    ];
  }
}
