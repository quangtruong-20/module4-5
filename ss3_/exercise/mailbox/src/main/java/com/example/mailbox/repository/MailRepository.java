package com.example.mailbox.repository;

import com.example.mailbox.model.Mail;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MailRepository implements IMailRepository{

  private static   Mail mailList ;

  static {

      mailList = new Mail("English","5",true,"a");
      mailList = new Mail("Japanese","10",false,"b");
      mailList = new Mail("Vietnamese","25",true,"c");

  }
    @Override
    public Mail getMailInfor() {
        return  mailList;
    }

    @Override
    public void updateMail(Mail mail) {
            mailList.setLanguages(mail.getLanguages());
            mailList.setPageSize(mail.getPageSize());
            mailList.setSpamsFilter(mail.isSpamsFilter());
            mailList.setSignature(mail.getSignature());
    }
}
